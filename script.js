'use strict';

//Select elements from the html document
const topDiv = document.querySelector('.top-div');
const num = document.querySelectorAll('.num');
const period = document.querySelector('.pd');
const equalBtn = document.querySelector('.cu');
const resetBtn = document.querySelector('.reset');
const operators = document.querySelectorAll('.op');

const all = {
  operant1: [],
  calSin: null,
  operant2: [],
  allNumInOp1: null,
  allNumInOp2: null,

  //add the text contents of numbers buttons to the operant1 property
  addToOperant1(al) {
    this.operant1.push(Number(al));
  },

  //add the text contents of numbers buttons to the operant2 property
  addToOperant2(al) {
    this.operant2.push(Number(al));
  },

  //set the value of the property calSin to value other than null
  changeCalSin(al) {
    this.calSin = al;
  },

  //place the values of operant1 and operand2 in allNumInOp1 and allNumInOp2
  calculatNum() {
    this.allNumInOp1 = Number(this.operant1.join(''));
    this.allNumInOp2 = Number(this.operant2.join(''));
  },

  //calculate values base on calSin value
  addNum(al) {
    this.allNumInOp1 = this.allNumInOp1 + this.allNumInOp2;
    this.operant1 = [this.allNumInOp1];
    this.operant2 = [];
    this.allNumInOp2 = null;
    this.calSin = al;
  },

  //calculate values base on calSin value
  minusNum(al) {
    this.allNumInOp1 = this.allNumInOp1 - this.allNumInOp2;
    this.operant1 = [this.allNumInOp1];
    this.operant2 = [];
    this.allNumInOp2 = null;
    this.calSin = al;
  },

  //calculate values base on calSin value
  multiplyNum(al) {
    this.allNumInOp1 = this.allNumInOp1 * this.allNumInOp2;
    this.operant1 = [this.allNumInOp1];
    this.operant2 = [];
    this.allNumInOp2 = null;
    this.calSin = al;
  },

  //calculate values base on calSin value
  devideNum(al) {
    this.allNumInOp1 = this.allNumInOp1 / this.allNumInOp2;
    this.operant1 = [this.allNumInOp1];
    this.operant2 = [];
    this.allNumInOp2 = null;
    this.calSin = al;
  },

  //use the equal button to calculate values and reset everything
  addWithEqualBtn() {
    this.joinArr();
    const result = this.allNumInOp1 + this.allNumInOp2;
    this.resetAll();
    topDiv.textContent = result;
    return result;
  },

  //use the equal button to calculate values and reset everything
  minusWithEqualBtn() {
    this.joinArr();
    const result = this.allNumInOp1 - this.allNumInOp2;
    this.resetAll();
    topDiv.textContent = result;
    return result;
  },

  //use the equal button to calculate values and reset everything
  multiplyWithEqualBtn() {
    this.joinArr();
    const result = this.allNumInOp1 * this.allNumInOp2;
    this.resetAll();
    topDiv.textContent = result;
    return result;
  },

  //use the equal button to calculate values and reset everything
  devideWithEqualBtn() {
    this.joinArr();
    const result = this.allNumInOp1 / this.allNumInOp2;
    this.resetAll();
    topDiv.textContent = result;
    return result;
  },

  //join all elements of the array and save it in allNumInOp1 and allNumInOp2 varaibles
  joinArr() {
    this.allNumInOp1 = Number(this.operant1.join(''));
    this.allNumInOp2 = Number(this.operant2.join(''));
  },

  //set everything back to normal
  resetAll() {
    this.operant1 = [];
    this.operant2 = [];
    this.calSin = null;
    this.allNumInOp1 = null;
    this.allNumInOp2 = null;
  },

  //set the value of operant1 to topdiv text content
  addContentOfTopDiv(al) {
    this.operant1 = [Number(topDiv.textContent)];
    this.calSin = al;
  },
};

//add event listenner to the numbers button and use conditions for their funtionalities
num.forEach(function (n) {
  n.addEventListener('click', function () {
    if (all.calSin === null) {
      all.addToOperant1(n.textContent);
      topDiv.textContent = all.operant1.join('');
    } else {
      all.addToOperant2(n.textContent);
      topDiv.textContent = all.operant2.join('');
    }
  });
});

//add event listenner to the period button and use conditions for it funtionalities
period.addEventListener('click', function () {
  if (all.calSin === null) {
    if (all.operant1.includes('.') === false && all.operant1.length > 0) {
      all.operant1.push('.');
      topDiv.textContent += '.';
    }
  } else if (all.calSin !== null) {
    if (all.operant2.includes('.') === false) {
      all.operant2.push('.');
    }
  }
});

//add event listenner to the operators button and use conditions for their funtionalities
operators.forEach(function (n) {
  n.addEventListener('click', function () {
    if (all.operant1.length <= 0 && topDiv.textContent !== '') {
      all.addContentOfTopDiv(n.textContent);
    }
    if (all.calSin === null && all.operant1.length > 0) {
      all.changeCalSin(n.textContent);
    } else if (all.calSin !== null && all.operant2.length > 0) {
      all.calculatNum();
    }

    if (all.calSin === '+' && all.allNumInOp2 !== null) {
      all.addNum(n.textContent);
    } else if (all.calSin === '-' && all.allNumInOp2 !== null) {
      all.minusNum(n.textContent);
    } else if (all.calSin === '*' && all.allNumInOp2 !== null) {
      all.multiplyNum(n.textContent);
    } else if (all.calSin === '/' && all.allNumInOp2 !== null) {
      all.devideNum(n.textContent);
    }
  });
});

//add event listenner to the button with = text content and use conditions for it funtionalities calculate valus and reset everything
equalBtn.addEventListener('click', function () {
  if (
    all.calSin !== null &&
    all.operant1.length > 0 &&
    all.operant2.length > 0
  ) {
    if (all.calSin === '+') {
      all.addWithEqualBtn();
    } else if (all.calSin === '-') {
      all.minusWithEqualBtn();
    } else if (all.calSin === '*') {
      all.multiplyWithEqualBtn();
    } else if (all.calSin === '/') {
      all.devideWithEqualBtn();
    }
  }
});

resetBtn.addEventListener('click', function () {
  all.resetAll();
  topDiv.textContent = '';
});
