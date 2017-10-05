import { assert } from 'chai'
import EasyInput from '../../src'

describe('EasyInputClass', () => {

  context('handleKeyDown()', () => {
    it('press "a" returns "A"', () => {
      assert.strictEqual(EasyInput.handleKeyDown({
        key: 'a',
        keyCode: 65,
        ctrlKey: false,
        shiftKey: false,
        altKey: false,
      }), 'A')
    })

    it('press "z" returns "Z"', () => {
      assert.strictEqual(EasyInput.handleKeyDown({
        key: 'z',
        keyCode: 90,
        ctrlKey: false,
        shiftKey: false,
        altKey: false,
      }), 'Z')
    })

    it('press "0" returns "0"', () => {
      assert.strictEqual(EasyInput.handleKeyDown({
        key: '0',
        keyCode: 48,
        ctrlKey: false,
        shiftKey: false,
        altKey: false,
      }), '0')
    })

    it('press "9" returns "9"', () => {
      assert.strictEqual(EasyInput.handleKeyDown({
        key: '9',
        keyCode: 57,
        ctrlKey: false,
        shiftKey: false,
        altKey: false,
      }), '9')
    })

    it('press "Ctrl + Shift + a" returns "Ctrl+Shift+A"', () => {
      assert.strictEqual(EasyInput.handleKeyDown({
        key: 'a',
        keyCode: 65,
        ctrlKey: true,
        shiftKey: true,
        altKey: false,
      }), 'Ctrl+Shift+A')
    })

    it('press "Ctrl + Shift + Alt + a" returns "Ctrl+Shift+Alt+A"', () => {
      assert.strictEqual(EasyInput.handleKeyDown({
        key: 'a',
        keyCode: 65,
        ctrlKey: true,
        shiftKey: true,
        altKey: true,
      }), 'Ctrl+Shift+Alt+A')
    })

    it('press "Ctrl + 1" returns "Ctrl+1"', () => {
      assert.strictEqual(EasyInput.handleKeyDown({
        key: '1',
        keyCode: 49,
        ctrlKey: true,
        shiftKey: false,
        altKey: false,
      }), 'Ctrl+1')
    })

    it('press "Ctrl + Shift + 1" returns "Ctrl+Shift+1"', () => {
      assert.strictEqual(EasyInput.handleKeyDown({
        key: '1',
        keyCode: 49,
        ctrlKey: true,
        shiftKey: true,
        altKey: false,
      }), 'Ctrl+Shift+1')
    })

    it('press "Ctrl + Shift + Alt + 1" returns "Ctrl+Shift+Alt+1"', () => {
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

    it('press "Shift" returns nothing', () => {
      assert.strictEqual(EasyInput.handleKeyDown({
        key: 'Shift',
        keyCode: 16,
        ctrlKey: false,
        shiftKey: true,
        altKey: false,
      }), '')
    })

    it('press "Alt" returns nothing', () => {
      assert.strictEqual(EasyInput.handleKeyDown({
        key: 'Alt',
        keyCode: 18,
        ctrlKey: false,
        shiftKey: false,
        altKey: true,
      }), '')
    })
  })
})

