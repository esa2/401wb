'use strict'

const solution = require('../lib/solution')

describe('Sll Solution', function() {
  describe('#sllCircle', function() {
    it('should return null if no argument passed', function() {
      expect(solution.sllCircle()).toEqual(null)
    })

    let normalList = {
      value: 0, next: {
        value: 1, next: {
          value: 2, next: {
            value: 3, next: null,
          },
        },
      },
    };
    it('should return false if non circular', function() {
      expect(solution.sllCircle(normalList)).toEqual(false)
    })
    
    it('should return true if circular', function() {
      let circularList = {
        value: 0, next: {
          value: 1, next: {
            value: 2, next: null,
          },
        },
      };
      circularList.next.next.next = circularList;
      expect(solution.sllCircle(circularList)).toEqual(true)
    })

    it('should return true if circular', function() {
      let circularList = {
        value: 0, next: {
          value: 1, next: {
            value: 2, next: null,
          },
        },
      };
      circularList.next.next.next = circularList.next;
      expect(solution.sllCircle(circularList)).toEqual(true)
    })
  })
})
