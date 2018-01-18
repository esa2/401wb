'use strict'

const solution = require('../lib/solution')

describe('Solution Module', function() {
  describe('#Traverse', function() {
    it('should return the total of all numbers for key value ', function() {
      const train = {
        "value": 2,
        "next": {
          "value": 8,
          "next": {
            "value": 16,
            "next": null
          }
        }
      }
      expect(solution.traverse(train)).toBe(26)
    })
    it('should return an error message for invalid values', function() {
      const train = {
        "value": 2,
        "next": {
          "value": 'b',
          "next": {
            "value": 16,
            "next": null
          }
        }
      }
      expect(solution.traverse(train)).toBe('Value does not contain a number')
    })
    it('should return null if not being passed an object', function() {
      expect(solution.traverse(1)).toBe(null)
    })
    it('should return null if not being passed an object', function() {
      expect(solution.traverse()).toBe(null)
    })
  })
})