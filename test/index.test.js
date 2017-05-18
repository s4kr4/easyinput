import { assert } from 'chai'
import EasyInput from '../index.js'

describe('EasyInputClass', () => {

  let easyInput

  beforeEach(() => {
    easyInput = new EasyInput()
  })

  context('handleKeyDown()', () => {
    it('press "Ctrl + A" return Ctrl+A', () => {
      assert.strictEqual(easyInput.handleKeyDown({
        key: 'A',
        keyCode: 65,
        ctrlKey: true,
        shiftKey: false,
        altKey: false,
      }), 'Ctrl+A')
    })

    it('press "Ctrl + Shift + A" returns Ctrl+Shift+A', () => {
      assert.strictEqual(easyInput.handleKeyDown({
        key: 'A',
        keyCode: 65,
        ctrlKey: true,
        shiftKey: true,
        altKey: false,
      }), 'Ctrl+Shift+A')
    })

    it('press "Ctrl" returns Ctrl+', () => {
      assert.strictEqual(easyInput.handleKeyDown({
        key: 'Control',
        keyCode: 17,
        ctrlKey: true,
        shiftKey: false,
        altKey: false,
      }), 'Ctrl+')
    })
  })
})

