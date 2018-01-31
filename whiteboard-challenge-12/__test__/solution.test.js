'use strict'

const solution = require('../lib/solution')

describe('Solution Module', function() {
  describe('#StackedQueue', function() {
    it('should return null if no argument passed', function() {
      expect(solution.stackedQueue()).toEqual(null)
    })
  })
  describe('#StackedQueue', function() {
    it('should return null if argument is not an integer', function() {
      expect(solution.stackedQueue('5')).toEqual(null)
    })
  })
  describe('#StackedQueue', function() {
    it('should return 1 which is the first value added to the stack', function() {
      expect(solution.stackedQueue(27)).toEqual(1)
    })
  })
})