'use strict'

exports.sllCircle = function(sll) {

  if (!sll) return null
  let nextx1 = sll
  let nextx2 = sll

  while (nextx2.next.next !== null) {
    nextx1 = nextx1.next
    nextx2 = nextx2.next.next
    if (nextx1 === nextx2) return true
  }
  return false
}
