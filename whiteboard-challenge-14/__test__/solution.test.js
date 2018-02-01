'use strict'

const SLL = require('../lib/sll')
const solution = require('../lib/solution')

describe('Solution Module', function() {
  describe('#DedupSll', function() {
    it('should return null if no arguments passed', function() {
      expect(solution.dedupSll()).toEqual(null)
    })
  })
  describe('#DedupSll', function() {
    let sll = new SLL()
    it('should return an object', function() {
      expect(sll).toBeInstanceOf(SLL)
    })
  })
  describe('#DedupSll', function() {
    let sll = new SLL()
    sll.insertHead('1')
    sll.insertEnd('2')
    sll.insertEnd('3')
    sll.insertEnd('3')
    sll.insertEnd('4')
    sll.insertEnd('5')
    it('should return sll with value 3 at 3rd node and 4 at 4th', function() {
      expect(solution.dedupSll(sll).head.next.next.value).toEqual('3')
      expect(solution.dedupSll(sll).head.next.next.next.value).toEqual('4')
    })
  })
})
