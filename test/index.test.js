import { assert } from 'chai'
import { handleKeyDown } from '../index.js'

describe('EasyInputClass', () => {

  let easyInput

  context('handleKeyDown()', () => {
    it('press "A" returns A', () => {
      assert.strictEqual(handleKeyDown({
        key: 'A',
        keyCode: 65,
        ctrlKey: false,
        shiftKey: false,
        altKey: false,
      }), 'A')
    })

    it('press "Ctrl + Shift + A" returns Ctrl+Shift+A', () => {
      assert.strictEqual(handleKeyDown({
        key: 'A',
        keyCode: 65,
        ctrlKey: true,
        shiftKey: true,
        altKey: false,
      }), 'Ctrl+Shift+A')
    })

    it('press "Ctrl + Shift + Alt + A" returns Ctrl+Shift+A', () => {
      assert.strictEqual(handleKeyDown({
        key: 'A',
        keyCode: 65,
        ctrlKey: true,
        shiftKey: true,
        altKey: true,
      }), 'Ctrl+Shift+Alt+A')
    })

    it('press "Ctrl" returns nothing', () => {
      assert.strictEqual(handleKeyDown({
        key: 'Control',
        keyCode: 17,
        ctrlKey: true,
        shiftKey: false,
        altKey: false,
      }), '')
    })
  })
})

