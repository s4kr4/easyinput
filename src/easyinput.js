'use strict'

import keycode from 'keycode'

class EasyInput {
  constructor() {
    this.DIGIT_ZERO = 48
    this.KEY_Z = 90

    this.validKeys = {
      ':': 186,
      ';': 187,
      ',': 188,
      '-': 189,
      '.': 190,
      '/': 191,
      '`': 192,
    }
    for (let i = 48; i < 91; i++) {
      this.validKeys[String.fromCharCode(i)] = i
    }
    console.log(this.validKeys)
  }

  handleKeyDown(event) {
    console.log(event.keyCode)

    let res = ''

    if (this.isPrintableKey(event.keyCode)) {
      let prefix = ''

      if (event.ctrlKey) {
        prefix += 'Ctrl+'
      }
      if (event.shiftKey) {
        prefix += 'Shift+'
      }
      if (event.altKey) {
        prefix += 'Alt+'
      }

      res = prefix + keycode(event).toUpperCase()
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

