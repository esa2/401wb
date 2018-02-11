'use strict'

function doTheThing(arr) {
  let obj = {}
  obj.high = Math.max(...arr)
  obj.low = Math.min(...arr) 
  obj.avg = arr.reduce((acc, cur) => acc + cur, 0) / arr.length
  return obj
}