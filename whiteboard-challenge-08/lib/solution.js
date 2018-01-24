'use strict'

exports.intersects = function(sll1, sll2) {
  const SLL = require('../lib/sll')
  let sll1Arr = []
  let sll2Arr = []
  
  sll1Arr.push(sll1.head.value)
  sll1.next = sll1.head.next
  while(sll1.next !== null) {
    sll1Arr.push(sll1.next.value)
    sll1.next = sll1.next.next
  }

  sll2Arr.push(sll2.head.value)
  sll2.next = sll2.head.next
  while(sll2.next !== null) {
    sll2Arr.push(sll2.next.value)
    sll2.next = sll2.next.next
  }

  let dups = sll1Arr.filter(function(ele) {
    return sll2Arr.indexOf(ele) != -1
  })

  let dupsll = new SLL()
  dups.map(ele => dupsll.insertHead(ele))
  return dupsll
}
