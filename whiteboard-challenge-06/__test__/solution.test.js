'use strict'

const loop = require('../lib/solution')

describe('Solution Module', function() {
  describe('#Loop', function() {
    it('should return null if not being passed an argument', function() {
      expect(loop()).toBe(null)
    })
    describe('#Loop', function() {
      it('should return null if passed 0', function() {
        expect(loop(0)).toBe(null)
      })
    })
    describe('#Loop', function() {
      it('should return undefined on successfull completion', function() {
        expect(loop(10)).toBe(undefined)
      })
    })
  })
})