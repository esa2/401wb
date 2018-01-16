'use strict'

module.exports.doTheThing = doTheThing

function doTheThing(arr) {
  if (arr.every(x => typeof x === 'number') && arr.length > 0)  {
    let obj = {}  
    obj.imhigh = 0
    obj.imAlmostHigh = 0
    arr.forEach(ele => {
      if (ele > obj.imhigh) {
        obj.imAlmostHigh = obj.imhigh
        obj.imhigh = ele
      } else {
        if (ele > obj.imAlmostHigh + 1) obj.imAlmostHigh = ele
      }
    })
  return obj
  }
 return null
}


