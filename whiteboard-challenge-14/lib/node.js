'use strict'

module.exports = class {
  constructor(value) {
    if(!value) return new Error('Missing Argument')
    this.value = value
    this.next = null
  }
}