const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(num) {
  let r = 0
  const str = String(num)
  for (let char of str) {
    let tempStr = str.replace(char, '')
    if (+tempStr > r) r = +tempStr
  }
  return r
}

module.exports = {
  deleteDigit
};
