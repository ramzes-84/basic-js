const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chains: {},
  getLength() {
  },
  addLink(value) {
    if (arguments) {
      this.chains[value] = value;
      return this;
    } else {
      this.chains['  '] = '  ';
      return this;
    }
  },
  removeLink(position) {
    if (this.chains.hasOwnProperty(position)) {
      delete this.chains[position];
      // console.log(this.chains);
      return this;
    } else {
      throw new Error ('You can\'t remove incorrect link!');
    }
  },
  reverseChain() {
    let arrForRev = Object.entries(this.chains).reverse();
    // console.log(arrForRev);
    let x = Object.fromEntries(arrForRev);
    // console.log(x);
    return this;
  },
  finishChain() {
    const arr = Object.values(this.chains);
    let r = arr.join(' )~~( ' );
     return (`( ${r} )`);
  }
};




// chainMaker.addLink(1).addLink(2).removeLink(1).addLink(3).finishChain() // => '( 2 )~~( 3 )'
// chainMaker.addLink(1).addLink(2).addLink(3).finishChain() // => '( 1 )~~( 2 )~~( 3 )'
// chainMaker.addLink(1).addLink(2).reverseChain().addLink(3).finishChain() // => '( 2 )~~( 1 )~~( 3 )'







module.exports = {
  chainMaker
};
