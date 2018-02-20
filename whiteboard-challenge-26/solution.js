'use strict'

const utils = require('./utils')

let testMap = [1, 2, 3, 4]
function testMapCb(element) {
  return element * 2
}
let resultMap = utils.map(testMap, testMapCb)
console.log(resultMap)

let testFilter = ['foo', 'bar', 'hello', 'jimbo']
function testFilterCb(element) {
  if (element.length > 3) return element
}
let resultFilter = utils.filter(testFilter, testFilterCb)
console.log(resultFilter)

let testReduce = [1, 2, 3, 4]
let resultReduce = utils.reduce(testReduce)
console.log(resultReduce)
