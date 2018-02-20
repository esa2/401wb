'use strict'

const utils = module.exports = {}

utils.map = function(arr, callback) {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    let result = callback(arr[i])
    newArr.push(result)
  }
  return newArr
}

utils.filter = function(arr, callback) {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    if (callback) {
      let result = callback(arr[i])
      if (result !== undefined) newArr.push(result)
    }
  }
  return newArr
}

utils.reduce = function(arr) {
  let total = 0
  for (let i = 0; i < arr.length; i++) {
    total += arr[i]
  }
  return total
}
