const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */

function getDNSStats(arr) {
  const r = {}
  if (arr.length === 0) return r
  for (let item of arr) {
    let arrFromItem = item.split('.').reverse()
    let accum = ''
    for (let dom of arrFromItem) {
      accum = accum + '.' + dom
      if (!r.hasOwnProperty(accum)) r[accum] = 1
      else r[accum] += 1
    }
  }
  return r
}

module.exports = {
  getDNSStats
};
