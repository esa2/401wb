'use strict'

let arr = [-0, 0, -99, 1, 1, 2, 2, -103]
function doTheThing(arr) {
  if (arr.every(x => typeof x === 'number') && arr.length > 0)  {
    let obj = {}  
    obj.imhigh = 0
    obj.imAlmostHigh = 0
    arr.forEach(ele => {
      if (ele > obj.imhigh) {
        obj.imAlmostHigh = obj.imhigh
        obj.imhigh = ele
      } else {
        if (ele > obj.imAlmostHigh + 1) obj.imAlmostHigh = ele
      }
    })
    console.log(obj)
  return obj
  }
 return null
}
doTheThing(arr)


// describe('DoTheThing Module', function() {
//   describe('#DoTheThing', function() {
//     it('should return the highest and next highest numbers in an array', function() {
//       let arr = [2, 0, 99, 8, 64, 9.2, 11, -103]
//       expect(doTheThing.doTheThing(arr)).toMatchObject({imhigh: 99, imAlmostHigh: 64})
//       let arr = [2, 'b', 99, 8, 64, 9.2, 11. -103]
//       expect(doTheThing.doTheThing(arr)).toBeNull
//       let arr = []
//       expect(doTheThing.doTheThing(arr)).toBeNull
//     })
//   })
// })
