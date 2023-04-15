const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */










function repeater(str, obj) {
  const additionRepeatTimes = obj['additionRepeatTimes'] ? obj['additionRepeatTimes'] : 1;
  const string = String(str);
  let addition
  if (obj['addition'] === false) addition = String(false)
  else if (obj['addition'] === null) addition = String(null)
  else addition = obj['addition'] ? String(obj['addition']) : '';
  const separator = obj['separator'] ? obj['separator'] : '+';
  const additionSeparator = (obj['additionSeparator']) ? obj['additionSeparator'].repeat(additionRepeatTimes) : '';
  const repeatTimes = obj['repeatTimes'] ? obj['repeatTimes'] : 1;
  const resultAddition = []
  for (let i = 1; i <= additionRepeatTimes; i++) {
    resultAddition.push(addition)
  }
  const resultAdditionToStr = resultAddition.join(obj['additionSeparator'])
  const resultMain = [];
  for (let i = 1; i <= repeatTimes; i++) {
    resultMain.push(string + resultAdditionToStr)
  }
  const resultMainToStr = resultMain.join(separator)
  return resultMainToStr
}


console.log(repeater('REPEATABLE_STRING', { repeatTimes: 2, addition: 'ADDITION', additionRepeatTimes: 3 }))


'REPEATABLE_STRINGADDITION|ADDITION|ADDITION+REPEATABLE_STRINGADDITION|ADDITION|ADDITION';



assert.equal(repeater('REPEATABLE_STRING', { repeatTimes: 2, addition: 'ADDITION', additionSeparator: '222', additionRepeatTimes: 3 }), 'REPEATABLE_STRINGADDITION222ADDITION222ADDITION+REPEATABLE_STRINGADDITION222ADDITION222ADDITION');
assert.equal(repeater('REPEATABLE_STRING', { repeatTimes: 2, separator: '222', addition: 'ADDITION', additionRepeatTimes: 3 }), 'REPEATABLE_STRINGADDITION|ADDITION|ADDITION222REPEATABLE_STRINGADDITION|ADDITION|ADDITION');






module.exports = {
  repeater
};