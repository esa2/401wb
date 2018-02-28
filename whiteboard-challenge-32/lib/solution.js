'use strict'

const solution = module.exports = {}

solution.iterativeFibonacci = int => {
  if (typeof int !== 'number' || int % 1 !== 0) return null
  let a = 1
  let b = 0
  let temp
  let counter = 0

  while (int !== counter) {
    temp = a
    a = a + b
    b = temp
    counter++
  }
  return b 
}

solution.recursiveFibonacci = int => {
  if (typeof int !== 'number' || int % 1 !== 0) return null
  if (int === 0) return 0
  if (int === 1) return 1
  
  while (int > 1) {
    return solution.recursiveFibonacci(int - 1) + solution.recursiveFibonacci(int - 2)
  }
}
