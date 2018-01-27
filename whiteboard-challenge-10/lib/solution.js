'use strict'

const solution = module.exports = {}

solution.checkBraces = str => {

  if (!str) return null
  var arr = []
  for (let i =0; i < str.length; i++) {
    if (str[i] === '{') arr.push(str[i])
    if (str[i] === '}') {
      if (arr.length === 0) {
        return false
      } else {
        arr.pop()
      }
    }
  }
  return (arr.length=== 0) ? true : false
}

solution.binarySearch = (arr, n) => {

  if (!arr || !n) return null
  let searchLocation = Math.floor(arr.length / 2)
  //if we are lucky we find it on first try
  if (arr[searchLocation] === n) return {value: arr[searchLocation], index: searchLocation}
  //search bottom half of array if the first number we check in array is less than n
  if (n < arr[searchLocation]) {
    while (true) {
      searchLocation = Math.floor(searchLocation / 2)
      if (arr[searchLocation] === n) {
        return {value: arr[searchLocation], index: searchLocation}
      } else {
        if (searchLocation === 0) return false
      }
    }
  }
  //search top half
  while (true) {
    searchLocation = Math.floor(arr.length / 2 + searchLocation / 2)
    if (arr[searchLocation] === n) {
      return {value: arr[searchLocation], index: searchLocation}
    } else {
      if (searchLocation >= arr.length) return false
    }
  }
}
