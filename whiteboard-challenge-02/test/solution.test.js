'use strict'

const solution = require('../lib/solution')

describe('Solution Module', function() {
  describe('#DoTheThing', function() {
    it('should return the highest and next highest numbers in an array', function() {
      let arr = [2, 0, 99, 8, 64, 9.2, 11, -103]
      expect(solution.doTheThing(arr)).toMatchObject({imhigh: 99, imAlmostHigh: 64})
    })
    it('should not return the same number for high and next highest', function() {
        let arr4 = [1, 1, 1, 2, 2, 2]
        expect(solution.doTheThing(arr4)).toMatchObject({imhigh: 2, imAlmostHigh: 1})
      })
    it('should return null for non-number in array or empty array', function() {
        let arr1 = [2, 'b', 99, 8, 64, 9.2, 11. -103]
        expect(solution.doTheThing(arr1)).toBeNull
        let arr2 = []
        expect(solution.doTheThing(arr2)).toBeNull
      })
  })
})