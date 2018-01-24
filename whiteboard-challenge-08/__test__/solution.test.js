'use strict'

const SLL = require('../lib/sll')
const solution = require('../lib/solution')

describe('Solution Module', function() {
  describe('#Intersect', function() {
    let sll = new SLL()
    it('should return an object', function() {
      expect(sll).toBeInstanceOf(SLL)
    })
    let sll1 = new SLL()
    sll1.insertHead('n5')
    sll1.insertHead('n4')
    sll1.insertHead('n3')
    sll1.insertHead('n2')
    sll1.insertHead('n1')
    let sll2 = new SLL()
    sll2.insertHead('o5')
    sll2.insertHead('n4')
    sll2.insertHead('o3')
    sll2.insertHead('o2')
    sll2.insertHead('n1')
    it('should return a linked list with value n1 and n4 which are values in both lists', function() {
      expect(solution.intersects(sll1, sll2).head.value).toEqual('n4')
      expect(solution.intersects(sll1, sll2).head.next.value).toEqual('n1')
    })
  })
})
