'use strict'

const solution = require('../lib/solution')
let array1 = [1, 2, 2, 1]
let array2 = [2, 2]
let array3 = [1.1, 2.2, 2.2, 1.1]
let array4 = [2.2, 2.2]

describe('Solution Module', function() {
  describe('#FindIntersection', function() {
    it('should return matched integers', function() {
      expect(solution.findIntersection(array1, array2)).toEqual([2])
    })
    it('should return matched floating point', function() {
      expect(solution.findIntersection(array3, array4)).toEqual([2.2])
    })
    it('should return an error message for no dups found', function() {
      expect(solution.findIntersection(['jimbo', 'foo'], ['wait', 'what'])).toBe('no matches')
    })
    it('should return null if not being passed an array', function() {
      expect(solution.findIntersection('2', 3)).toBe(null)
    })
    it('should return null if no argument passed', function() {
      expect(solution.findIntersection()).toBe(null)
    })
  })
})