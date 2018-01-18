'use strict'

const solution = require('../lib/solution')
let arr1 = ["mike", "sue", "tom", "kathy", "henry"]
let arr2 = ["howey", "jim", "sue", "jennifer", "kathy", "hank", "alex"]

describe('Solution Module', function() {
  describe('#FindIt', function() {
    it('should return the matched values', function() {
      expect(solution.findIt(arr1, arr2)).toEqual(['sue', 'kathy'])
    })
    it('should return an error message for no dups found', function() {
      expect(solution.findIt(['jimbo', 'foo'], ['wait', 'what'])).toBe('no matches')
    })
    it('should return null if not being passed an array', function() {
      expect(solution.findIt('2', 3)).toBe(null)
    })
  })
})