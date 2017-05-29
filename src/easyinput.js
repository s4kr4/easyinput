'use strict'

class EasyInput {
  constructor() {
    this.DIGIT_ZERO = 48
    this.KEY_Z = 90
    this.keys = []
  }

  handleKeyDown(event) {
    if (event.ctrlKey) {
      this.keys.push('Ctrl+')
    }
    if (event.shiftKey) {
      this.keys.push('Shift+')
    }
    if (event.altKey) {
      this.keys.push('Alt+')
    }

    let res = this.isPrintableKey(event.keyCode)
                ? this.keys.join('') + event.key.toUpperCase()
                : ''

    this.keys = []

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

