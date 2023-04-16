const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2) {
  let r = 0
  let strForIters = (s1.length > s2.length) ? s2 : s1
  let strForSearch = (s1.length > s2.length) ? s1 : s2
  for (let char of strForIters) {
    if (strForSearch.includes(char)) {
      r += 1
      strForSearch = strForSearch.replace(char, '')
    }
  }
  return r
}

module.exports = {
  getCommonCharacterCount
};
