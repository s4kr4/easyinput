'use strict'

class EasyInput {
  constructor() {
    this.keys = []
  }

  handleKeyDown(event) {
    if (event.ctrlKey) {
      this.keys.push(this.ignoreDupKey('Ctrl+'))
    }
    if (event.shiftKey) {
      this.keys.push(this.ignoreDupKey('Shift+'))
    }
    if (event.altKey) {
      this.keys.push(this.ignoreDupKey('Alt+'))
    }

    let res = (this.isPrintableKey(event.keyCode) ? this.keys.join('') + event.key : '')

    this.keys = []

    return res
  }

  ignoreDupKey(key) {
    if (this.keys.indexOf(key) === -1) {
      return key
    } else {
      return ''
    }
  }

  isPrintableKey(keyCode) {
    if (49 <= keyCode && keyCode <= 90) {
      return true
    } else {
      return false
    }
  }
}

module.exports = new EasyInput()

