'use strict'

const solution = module.exports = {}

solution.highWord = function(string) {
  if (!string || typeof string !== 'string') return null
  let currentTotal = 0;
  let lastTotal = 0;
  let highWord = '';
  let strArr = string.split(' ');
  for (let i = 0; i < strArr.length; i++) {
    currentTotal = 0;
    for ( let j = 0; j < strArr[i].length; j++) { 
      currentTotal += (strArr[i].charCodeAt(j) - 96);
    }
    if (currentTotal > lastTotal) {
      highWord = strArr[i];
      lastTotal = currentTotal;
      currentTotal = 0;
    }
  }
  return(highWord);
}
