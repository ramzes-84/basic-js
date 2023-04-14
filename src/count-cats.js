const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */


function countCats(matr) {
  let r = [];
  for (item of matr) {
    let count = item.filter((i) => i === '^^');
    r.push(...count);
  };
  return r.length;
}

// console.log(countCats([
//   [0, 1, '^^'],
//   [0, '^^', 2],
//   ['^^', 1, 2]
// ]))




module.exports = {
  countCats
};
