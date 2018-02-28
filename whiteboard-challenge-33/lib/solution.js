'use strict'

const solution = module.exports = {}

solution.expoSum = (base, exponential) => {
  if (!base || !exponential || base % 1 !== 0 || exponential % 1 !== 0) return 'invalid arguments'
  return Math.pow(base, exponential).toString().split('').map(Number).reduce((a, b) => a + b, 0)
}
