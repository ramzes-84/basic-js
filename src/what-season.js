const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */


function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  else if (Object.prototype.toString.call(date) !== "[object Date]") throw new Error('Invalid date!');
  else if (!(date instanceof Date)) throw new Error('Invalid date!');
  else if (Object.getOwnPropertyNames(new Date()).join('') !== Object.getOwnPropertyNames(date).join('')) throw new Error('Invalid date!');
  else {
    let r;
    const month = date.getMonth();
    if (month == 11) r = 'winter';
    if (month < 11) r = 'fall';
    if (month < 8) r = 'summer';
    if (month < 5) r = 'spring';
    if (month < 2) r = 'winter';
    return r;
  };
}






// console.log(getSeason(() => new Date()));
// console.log(getSeason());
// console.log(getSeason('srting'))






module.exports = {
  getSeason
};
