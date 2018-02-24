'use strict'

const solution = require('../lib/solution')

describe('Solution Module', function() {
  describe('#sortAnagrams', function() {
    it('should return foo if no arguments passed', function() {
      expect(solution.sortAnagrams()).toEqual('foo')
    })
    it('should return foo if empty array', function() {
      expect(solution.sortAnagrams([])).toEqual('foo')
    })
    it('should remove any element that is not a string', function() {
      expect(solution.sortAnagrams(['race', 'acre', 'act', 5, 'tac', 1000.0001, 'cat'])).toEqual(['race', 'acre', 'act', 'tac', 'cat'])
    })
    it('should return array with sorted anagrams and non-words', function() {
      expect(solution.sortAnagrams(['race', 'acre', 'act', '5', 'cat', 'tac', 'a', '9', '5', '5', 'foo', 'oof'])).toEqual([ '5', '5', '5', '9', 'race', 'acre', 'act', 'cat', 'tac', 'a', 'foo', 'oof' ])
    })
    it('should return array with sorted anagrams', function() {
      expect(solution.sortAnagrams(['acre', 'act', 'race', 'cat', 'tac', 'care', 'bug'])).toEqual(['acre', 'race', 'care', 'act', 'cat', 'tac', 'bug'])
    })
  })
})