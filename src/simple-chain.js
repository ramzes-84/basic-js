const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  getLength() {
  },
  addLink(value) {
  },
  removeLink(position) {
  },
  reverseChain() {
  },
  finishChain() {
  }
};




chainMaker.addLink(1).addLink(2).addLink(3).finishChain() // => '( 1 )~~( 2 )~~( 3 )'
chainMaker.addLink(1).addLink(2).removeLink(1).addLink(3).finishChain() // => '( 2 )~~( 3 )'
chainMaker.addLink(1).addLink(2).reverseChain().addLink(3).finishChain() // => '( 2 )~~( 1 )~~( 3 )'








module.exports = {
  chainMaker
};
