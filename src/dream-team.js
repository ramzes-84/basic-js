const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */





function createDreamTeam(arr) {
  if (Array.isArray(arr)) {
    const firstLetters = arr.map(function(item) {
    if (typeof item === 'string') {
      let firstChar = item.trim()[0].toUpperCase();
      return firstChar;
    };
  });
  return firstLetters.sort().join('');
  } else return false;
}


module.exports = {
  createDreamTeam
};
