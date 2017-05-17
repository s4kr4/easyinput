import { assert } from 'chai'
import EasyInput from '../index.js'

describe('EasyInputClass', () => {

  let easyInput

  beforeEach(() => {
    easyInput = new EasyInput()
  })

  context('handleKeyDown()', () => {
    it('Ctrl + A keys return Ctrl+A', () => {
      assert.strictEqual(easyInput.handleKeyDown({
        key: 'A',
        ctrlKey: true,
        shiftKey: false,
        altKey: false,
      }), 'Ctrl+A')
    })

    it('Ctrl + Shift + A key returns Ctrl+Shift+A', () => {
      assert.strictEqual(easyInput.handleKeyDown({
        key: 'A',
        ctrlKey: true,
        shiftKey: true,
        altKey: false,
      }), 'Ctrl+Shift+A')
    })

    // it('Ctrl + Control key returns Ctrl+', () => {
    //   assert.strictEqual(easyInput.handleKeyDown({
    //     key: 'Control',
    //     ctrlKey: true,
    //     shiftKey: false,
    //     altKey: false,
    //   }), 'Ctrl+')
    // })
  })
})

