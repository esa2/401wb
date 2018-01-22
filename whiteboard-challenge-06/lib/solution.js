'use strict'

let loop = (count, callback) => {
  if (count < 1 || typeof count !== 'number') return null
  callback
  loop(count -1, callback)
}
module.exports = loop