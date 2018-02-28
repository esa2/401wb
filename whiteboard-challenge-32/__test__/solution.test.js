'use strict'

const solution = require('../lib/solution')

describe('Solution Module', function() {
  describe('#IterativeFibonacci', function() {
    it('should return null if not being passed a number', function() {
      expect(solution.iterativeFibonacci('2')).toBe(null)
    })
    it('should return null if no argument passed', function() {
      expect(solution.iterativeFibonacci()).toBe(null)
    })
    it('should return null if float', function() {
      expect(solution.iterativeFibonacci(8.4)).toBe(null)
    })
    it('should return 0 for 0 entry in sequence', function() {
      expect(solution.iterativeFibonacci(0)).toBe(0)
    })
    it('should return 1 for 1st entry in sequence', function() {
      expect(solution.iterativeFibonacci(1)).toBe(1)
    })
    it('should return 21 for 8th entry in sequence', function() {
      expect(solution.iterativeFibonacci(8)).toBe(21)
    })
  })

  describe('#RecursiveFibonacci', function() {
    it('should return null if not being passed a number', function() {
      expect(solution.recursiveFibonacci('2')).toBe(null)
    })
    it('should return null if no argument passed', function() {
      expect(solution.recursiveFibonacci()).toBe(null)
    })
    it('should return null if float', function() {
      expect(solution.recursiveFibonacci(8.4)).toBe(null)
    })
    it('should return 0 for 0 entry in sequence', function() {
      expect(solution.recursiveFibonacci(0)).toBe(0)
    })
    it('should return 1 for 1st entry in sequence', function() {
      expect(solution.recursiveFibonacci(1)).toBe(1)
    })
    it('should return 21 for 8th entry in sequence', function() {
      expect(solution.recursiveFibonacci(8)).toBe(21)
    })
  })
})