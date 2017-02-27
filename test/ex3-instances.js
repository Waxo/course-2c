require('chai').should();

const {MyClassForEx3} = require('../app/ex3-instances');

describe('app/ex3-instance.js', () => {
  describe('#MyClassForEx3', () => {
    it('should be an instance of MyClassForEx3', () => {
      const classInstance = new MyClassForEx3();
      classInstance.should.be.instanceof(MyClassForEx3);
    });
  });

  describe('#MyClassForEx3.add', () => {
    it('should exist', () => {
      const classInstance = new MyClassForEx3();
      classInstance.should.have.property('add');
    });

    it('should accept 3 number (and add them)', () => {
      const classInstance = new MyClassForEx3(2, 4, 6);
      const classInstance2 = new MyClassForEx3(1, 5, 3);
      classInstance.add().should.be.equal(12);
      classInstance2.add().should.be.equal(9);
    });

    it('should accept n numbers (and add them)', () => {
      const numberCount = Math.floor(Math.random() * 100);
      const arrayNumbers = [];
      for (let i = 0; i < numberCount; i++) {
        arrayNumbers.push(((Math.floor(Math.random() * 10) > 5) ? -1 : 1) *
          Math.floor(Math.random() * 100));
      }
      const total = arrayNumbers.reduce((a, b) => a + b);
      const classInstance = new MyClassForEx3(...arrayNumbers);
      classInstance.add().should.be.equal(total);
    });
  });

  describe('#MyClassForEx3.subtract', () => {
    it('should exist', () => {
      const classInstance = new MyClassForEx3();
      classInstance.should.have.property('subtract');
    });

    it('should accept 3 number (and subtract them)', () => {
      const classInstance = new MyClassForEx3(2, 4, 6);
      const classInstance2 = new MyClassForEx3(1, 5, 3);
      const classInstance3 = new MyClassForEx3(-1, 5, 3);
      classInstance.subtract().should.be.equal(-8);
      classInstance2.subtract().should.be.equal(-7);
      classInstance3.subtract().should.be.equal(-9);
    });

    it('should accept n numbers (and subtract them)', () => {
      const numberCount = Math.floor(Math.random() * 100);
      const arrayNumbers = [];
      for (let i = 0; i < numberCount; i++) {
        arrayNumbers.push(((Math.floor(Math.random() * 10) > 5) ? -1 : 1) *
          Math.floor(Math.random() * 100));
      }
      const classInstance = new MyClassForEx3(...arrayNumbers);
      const total = arrayNumbers.reduce((a, b) => a - b);
      classInstance.subtract().should.be.equal(total);
    });
  });
});
