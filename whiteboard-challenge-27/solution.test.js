'use strict'

const solution = require('./solution')

describe('Solution Module', function() {
  describe('#rotateArray', function() {
    it('should return null if no arguments passed', function() {
      expect(solution.rotateArray()).toEqual(null)
    })
    it('should return null if not a two-dimensional array', function() {
      expect(solution.rotateArray([[1, 2, 3], [4, 5, 6],
      ])).toEqual(null)
    })
    it('should return an array of integers rotated 90 degrees clockwise', function() {
      expect(solution.rotateArray([[1, 2, 3], [4, 5, 6], [7, 8, 9],
      ])).toEqual([[7, 4, 1], [8, 5, 2], [9, 6, 3]])
    })
    it('should return an array of strings rotated 90 degrees clockwise', function() {
      expect(solution.rotateArray([['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9'],
      ])).toEqual([['7', '4', '1'], ['8', '5', '2'], ['9', '6', '3']])
    })
  })
})