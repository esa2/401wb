'use strict'

const solution = module.exports = {}

solution.findIt = (arr1, arr2) => {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) return null
  let dupArr = []
  arr1.map((ele) => {
    for (let i = 0; i < arr2.length; i++) {
      if (ele === arr2[i]) {
        dupArr.push(arr2[i])
      }
    }
  })
  return dupArr.length ? dupArr : 'no matches' 
}