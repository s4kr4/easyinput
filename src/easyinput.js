'use strict'

const keycodes = {
  DIGIT_ZERO: 48,
  KEY_Z: 90,
}

export default class EasyInput {
  constructor() {
    this.keys = []
  }

  handleKeyDown(event) {
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

      res = prefix + event.key.toUpperCase()
    }

    return res
  }

  isPrintableKey(keyCode) {
    if (keycodes.DIGIT_ZERO <= keyCode && keyCode <= keycodes.KEY_Z) {
      return true
    } else {
      return false
    }
  }
}

