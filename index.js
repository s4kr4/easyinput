'use strict'

let keys = []

function handleKeyDown(event) {
  if (event.ctrlKey) {
    keys.push(ignoreDupKey('Ctrl+'))
  }
  if (event.shiftKey) {
    keys.push(ignoreDupKey('Shift+'))
  }
  if (event.altKey) {
    keys.push(ignoreDupKey('Alt+'))
  }

  let res = (isPrintableKey(event.keyCode) ? keys.join('') + event.key : '')

  return res
}

function ignoreDupKey(key) {
  if (keys.indexOf(key) == -1) {
    return key
  } else {
    return ''
  }
}

function isPrintableKey(keyCode) {
  if (49 <= keyCode && keyCode <= 90) {
    return true
  } else {
    return false
  }
}

module.exports = {
  handleKeyDown
}
