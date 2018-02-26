'use strict'

const solution = module.exports = {}

solution.findIntersection = (array1, array2) => {
  if (!Array.isArray(array1) || !Array.isArray(array2)) return null

  let tempArray = []
  array1.map(ele1 => {
    array2.map(ele2 => {
      if (ele1 === ele2) tempArray.push(ele2)
    })
  })
  let dupArray  = [...new Set(tempArray)]
  return dupArray.length ? dupArray : 'no matches' 
}