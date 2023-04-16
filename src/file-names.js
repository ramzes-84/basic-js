const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */



function renameFiles(arr) {
  let r = new Array;
  let dictionary = new Object;
  for (let item of arr) {
    if (!dictionary.hasOwnProperty(item)) {
      r.push(item);
      dictionary[item] = 0;
    } else {
      dictionary[item]++;
      let rename = item + '(' + dictionary[item] + ')';
      r.push(rename);
      dictionary[rename] = 0;
    }
  }
  return r;
}








module.exports = {
  renameFiles
};
