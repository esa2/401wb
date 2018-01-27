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
  describe('#BinarySearch', function() {
    it('should return null if missing arguments', function() {
      expect(solution.binarySearch()).toEqual(null)
    })
  })
  describe('#BinarySearch', function() {
    it('should return 2 if at index 0', function() {
      expect(solution.binarySearch([2], 2)).toEqual({value: 2, index: 0})
    })
  })
  describe('#BinarySearch', function() {
    it('should return 2 at index 1', function() {    
      expect(solution.binarySearch([1, 2, 3, 4, 5, 6], 2)).toEqual({value: 2, index: 1})
    })
  })
  describe('#BinarySearch', function() {
    it('should return 6 at index 5', function() {
      expect(solution.binarySearch([1, 2, 3, 4, 5, 6], 6)).toEqual({value: 6, index: 5})
    })
  })
})
