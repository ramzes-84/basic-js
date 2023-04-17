const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let r = 1;
    for (let item of arr) {
        let currDepth = 1;
        if (Array.isArray(item)) {
          currDepth += this.calculateDepth(item);
          if (currDepth > r) {
            r = currDepth;
          }
        }
      }
    return r;
  }
}

module.exports = {
  DepthCalculator
};





// let r;

// function calculateDepth(arr) {
//   let count = 0;
//   function goDeep(a) {
//     for (let i of a) {
//       if (Array.isArray(i)) {
//         count += 1;
//         goDeep(i);
//       }
//     }
//   }
//   for (let item of arr) {
//     if (Array.isArray(item)) goDeep(item);
//   }
//   console.log(count);
// }



// calculateDepth([1, 2, 3, [8, [2]], 4, 5, []]);
// calculateDepth([1, [8, [[]]], [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]], []]]], []]]]]]]]], []]]], []]]]]]]]]], 2, 3, [8, [[[[[[[[[[[[[[]]]]]]]]]]]]]]], [8, [[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]], 4, 5, ['6575', ['adas', ['dfg', [0]]]]]);

// console.log(calculateDepth([1, 2, 3, [8, [2]], 4, 5, []]));
// console.log(calculateDepth([1, [8, [[]]], [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]], []]]], []]]]]]]]], []]]], []]]]]]]]]], 2, 3, [8, [[[[[[[[[[[[[[]]]]]]]]]]]]]]], [8, [[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]], 4, 5, ['6575', ['adas', ['dfg', [0]]]]]));
