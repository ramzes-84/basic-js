const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */








function transform(arr) {
  let r = [];
  let isModified = false;
  if (!Array.isArray(arr)) throw new Error(`'arr' parameter must be an instance of the Array!`);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != '--double-next' &&
        arr[i] != '--double-prev' &&
        arr[i] != '--discard-prev' &&
        arr[i] != '--discard-next') {
      r.push(arr[i]);
      isModified = false;
    }
    else {
      if (arr[i] === '--double-next' && i != (arr.length - 1)) r.push(arr[i + 1]);
      if (arr[i] === '--double-prev' && i > 0 && !isModified) r.push(r[r.length - 1]);
      if (arr[i] === '--discard-prev' && !isModified) {
        r.pop();
        isModified = true;
      };
      if (arr[i] === '--discard-next') {
        i += 1;
        isModified = true;
      };
    }
  }
  return r;
}



module.exports = {
  transform
};
