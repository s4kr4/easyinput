import { assert } from 'chai'
import EasyInput from '../index.js'

describe('EasyInputClass', () => {

  context('handleKeyDown()', () => {
    it('press "a" returns A', () => {
      assert.strictEqual(EasyInput.handleKeyDown({
        key: 'a',
        keyCode: 65,
        ctrlKey: false,
        shiftKey: false,
        altKey: false,
      }), 'A')
    })

    it('press "Ctrl + Shift + a" returns Ctrl+Shift+A', () => {
      assert.strictEqual(EasyInput.handleKeyDown({
        key: 'a',
        keyCode: 65,
        ctrlKey: true,
        shiftKey: true,
        altKey: false,
      }), 'Ctrl+Shift+A')
    })

    it('press "Ctrl + Shift + Alt + a" returns Ctrl+Shift+A', () => {
      assert.strictEqual(EasyInput.handleKeyDown({
        key: 'a',
        keyCode: 65,
        ctrlKey: true,
        shiftKey: true,
        altKey: true,
      }), 'Ctrl+Shift+Alt+A')
    })

    it('press "Ctrl + 1" returns Ctrl+1', () => {
      assert.strictEqual(EasyInput.handleKeyDown({
        key: '1',
        keyCode: 49,
        ctrlKey: true,
        shiftKey: false,
        altKey: false,
      }), 'Ctrl+1')
    })

    it('press "Ctrl + Shift + 1" returns Ctrl+Shift+1', () => {
      assert.strictEqual(EasyInput.handleKeyDown({
        key: '1',
        keyCode: 49,
        ctrlKey: true,
        shiftKey: true,
        altKey: false,
      }), 'Ctrl+Shift+1')
    })

    it('press "Ctrl + Shift + Alt + 1" returns Ctrl+Shift+Alt+1', () => {
      assert.strictEqual(EasyInput.handleKeyDown({
        key: '1',
        keyCode: 49,
        ctrlKey: true,
        shiftKey: true,
        altKey: true,
      }), 'Ctrl+Shift+Alt+1')
    })

    it('press "Ctrl" returns nothing', () => {
      assert.strictEqual(EasyInput.handleKeyDown({
        key: 'Control',
        keyCode: 17,
        ctrlKey: true,
        shiftKey: false,
        altKey: false,
      }), '')
    })
  })
})

