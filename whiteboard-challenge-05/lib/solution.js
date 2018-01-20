'use strict'

const solution = module.exports = {}

solution.findIt = (obj) => {
  if (!obj.head) return null
  let objCount = 1
  for(var itr = obj.head; itr.next; itr = itr.next) objCount++
  let middle = Math.round(objCount / 2)
  let midCount = 1
  for(var itr = obj.head; midCount < middle; itr = itr.next) midCount++
  return `{value: ${itr.value}, next:}`
  }
