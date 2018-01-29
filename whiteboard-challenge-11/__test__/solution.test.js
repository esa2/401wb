'use strict'

const solution = require('../lib/solution')

describe('Solution Module', function() {
  describe('#CalculateMissing', function() {
    it('should return null if no argument passed', function() {
      expect(solution.calculateMissing()).toEqual(null)
    })
  })
  describe('#CalculateMissing', function() {
    it('should return null if argument is not an array', function() {
      expect(solution.calculateMissing(5)).toEqual(null)
    })
  })
  describe('#CalculateMissing', function() {
    var arr = [...Array(99)].map((e, i) => (i + 2))
    it('should return 1 which is missing in array', function() {
      expect(solution.calculateMissing(arr)).toEqual(1)
    })
  })
})
