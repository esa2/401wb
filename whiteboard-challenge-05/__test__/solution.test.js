'use strict'

const solution = require('../lib/solution')
let objOdd = {head: {value: "1", next: {value: "2", next: {value: "3", next: {value: "4", next: {value: "5", next: null}}}}}}
let objEven = {head: {value: "1", next: {value: "2", next: {value: "3", next: {value: "4", next: null}}}}}

describe('Solution Module', function() {
  describe('#FindIt', function() {
    it('should return the object at the middle for odd amount of items in link list', function() {
      expect(solution.findIt(objOdd)).toEqual(`{value: 3, next:}`)
    })
    it('should return the first of the 2 middle objects for even amount of items in link list', function() {
      expect(solution.findIt(objEven)).toEqual(`{value: 2, next:}`)
    })
    it('should return null if not being passed a linked list head', function() {
      expect(solution.findIt('I\'m not a linkede list')).toBe(null)
    })
  })
})