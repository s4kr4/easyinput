'use strict'

import keycode from 'keycode'

class EasyInput {
  constructor() {
    this.DIGIT_ZERO = 48
    this.KEY_Z = 90

    this.validKeys = {
      ';': 186,
      '=': 187,
      ',': 188,
      '-': 189,
      '.': 190,
      '/': 191,
      '`': 192,
      '[': 219,
      '\\': 220,
      ']': 221,
    }
    for (let i = 48; i < 91; i++) {
      this.validKeys[String.fromCharCode(i)] = i
    }

    this.validKeysWithShift = {
      '~': 186,
      ':': 187,
      '{': 192,
      '}': 219,
      '|': 221,
      '+': 222,
    }
  }

  handleKeyDown(event) {
    let res = ''
    let key = ''

    if (this.isPrintableKey(event.keyCode)) {
      let prefix = ''

      if (event.ctrlKey) {
        prefix += 'Ctrl+'
      }

      if (event.shiftKey) {
        prefix += 'Shift+'
        key = this.validKeysWithShift[event.keyCode]
      } else {
        key = keycode(event).toUpperCase()
      }

      if (event.altKey) {
        prefix += 'Alt+'
      }

      res = prefix + key
    }

    return res
  }

  isPrintableKey(keyCode) {
    if (this.DIGIT_ZERO <= keyCode && keyCode <= this.KEY_Z) {
      return true
    } else {
      return false
    }
  }
}

module.exports = new EasyInput()

