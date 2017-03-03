const MyClassForEx3 = function () {
  this.numbers = [];
  for (const argv in arguments) {
    if (Object.prototype.hasOwnProperty.call(arguments, argv)) {
      this.numbers.push(arguments[argv]);
    }
  }
};

MyClassForEx3.prototype = {
  add() {
    return this.numbers.reduce((a, b) => a + b);
  },
  subtract() {
    return this.numbers.reduce((a, b) => a - b);
  }
};

module.exports = {MyClassForEx3};
