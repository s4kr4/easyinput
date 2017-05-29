'use strict'

import keycode from 'keycode'

class EasyInput {
  constructor() {
    this.DIGIT_ZERO = 48
    this.KEY_Z = 90
    this.keys = []
  }

  handleKeyDown(event) {
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

    let res = this.isPrintableKey(event.keyCode)
                ? prefix + keycode(event).toUpperCase()
                : ''
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

