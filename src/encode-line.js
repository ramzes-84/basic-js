const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */


function encodeLine(str) {
  const r = [];
  let rStr = ''
  if (str === '') return '';
  let prevChar;
  for (let char of str) {
      if (prevChar === char) {
          r[r.length - 1][0] += 1;
      } else {
          r.push([1, char]);
      }
      prevChar = char;
  }
  for (let subArr of r) {
    if (subArr[0] === 1) rStr = rStr + subArr[1]
    else rStr = rStr + subArr.join('')
  }
  return rStr;
}



module.exports = {
  encodeLine
};
