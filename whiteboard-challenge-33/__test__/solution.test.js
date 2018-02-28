'use strict'

const solution = require('../lib/solution')

describe('Solution Module', function() {
  describe('#ExpoSum', function() {
    it('should return error msg if no arguments passed', function() {
      expect(solution.expoSum()).toBe('invalid arguments')
    })
    it('should return error msg if not being passed both arguments', function() {
      expect(solution.expoSum(2)).toBe('invalid arguments')
    })
    it('should return error msg if passed floats', function() {
      expect(solution.expoSum(2.2, 15)).toBe('invalid arguments')
    })
    it('should return 26 for 2 to 15th power and sum of result digits', function() {
      expect(solution.expoSum(2, 15)).toBe(26)
    })
  })
})
