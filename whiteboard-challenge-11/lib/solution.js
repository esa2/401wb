'use strict'

const solution = module.exports = {}

solution.calculateMissing = arr => (!arr || !Array.isArray(arr)) ? null : (5050 - arr.reduce((acc, ele) => acc + ele))

