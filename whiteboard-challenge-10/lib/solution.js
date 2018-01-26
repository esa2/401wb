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
