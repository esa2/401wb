'use strict'

const SLL = require('../lib/sll')
const solution = require('../lib/solution')

describe('Solution Module', function() {
  describe('#FindOffSet', function() {
    it('should return null if no arguments passed', function() {
      expect(solution.findOffset()).toEqual(null)
    })
  })
  describe('#FindOffSet', function() {
    let sll = new SLL()
    it('should return an object', function() {
      expect(sll).toBeInstanceOf(SLL)
    })
  })
  describe('#FindOffSet', function() {
    let sll = new SLL()
    sll.insertHead('n5')
    sll.insertHead('n4')
    sll.insertHead('n3')
    sll.insertHead('n2')
    sll.insertHead('n1')
    it('should return null if offset greater than node total', function() {
      expect(solution.findOffset(sll, 6)).toEqual(null)
    })
  })
  describe('#FindOffSet', function() {
    let sll = new SLL()
    sll.insertHead('n5')
    sll.insertHead('n4')
    sll.insertHead('n3')
    sll.insertHead('n2')
    sll.insertHead('n1')
    it('should return a linked list with value n1 and n4 which are values in both lists', function() {
      expect(solution.findOffset(sll, 2).head.value).toEqual('n3')
    })
  })
})
