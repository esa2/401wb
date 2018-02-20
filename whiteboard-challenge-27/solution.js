'use strict'

const solution = module.exports = {}

solution.rotateArray = function(array) {
  if (!array) return null
  if (array.length !== array[0].length) return null
  let reverseArray = array.reverse()
  for (let i = 0; i < reverseArray.length; i++) {
    for (let j = 0; j < i; j++) {
      let temp = reverseArray[i][j]
      reverseArray[i][j] = reverseArray[j][i]
      reverseArray[j][i] = temp
    }
  }
  return reverseArray
}
