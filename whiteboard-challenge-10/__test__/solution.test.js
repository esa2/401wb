'use strict'

const solution = require('../lib/solution')

describe('Solution Module', function() {
  describe('#CheckBraces', function() {
    it('should return null if no argument passed', function() {
      expect(solution.checkBraces()).toEqual(null)
    })
  })
  describe('#CheckBraces', function() {
    it('should return true if valid number and order of braces', function() {
      expect(solution.checkBraces('{e{fff}li2} it is true!')).toEqual(true)
    })
  })
  describe('#CheckBraces', function() {
    it('should return false if valid number and order of braces', function() {
      expect(solution.checkBraces('it is false!!!{{}}}')).toEqual(false)
    })
  })
})
