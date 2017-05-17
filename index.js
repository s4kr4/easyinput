export default class EasyInput  {
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

    let res = this.keys.join('') + event.key

    return res
  }

  ignoreDupKey(key) {
    if (this.keys.indexOf(key) == -1) {
      return key
    } else {
      return ''
    }
  }
}

