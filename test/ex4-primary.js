const should = require('chai').should();

require('../app/ex4-primary');

describe('app/ex4-primary.js', () => {
  describe('#String.containsNumber', () => {
    it('should contains the given number', () => {
      'test12test'.containsNumber(12).should.be.true;
      '1test12test'.containsNumber(1).should.be.true;
    });

    it('should not contains the given number', () => {
      'test12test'.containsNumber(22).should.be.false;
      'test232test'.containsNumber(22).should.be.false;
    });
  });

  describe('#String.hasNumber', () => {
    it('should be true if there is number in string', () => {
      'test12test'.hasNumber().should.be.true;
      'te3st1te7st'.hasNumber().should.be.true;
    });

    it('should be false if the is no number in string', () => {
      'test test'.hasNumber().should.be.false;
      'ce matin un lapin'.hasNumber().should.be.false;
    });
  });

  describe('#String.toNumber', () => {
    it('should return the number concatenated in a string', () => {
      'test12test'.toNumber().should.be.equal(12);
      'te2st12te3st'.toNumber().should.be.equal(2123);
      '1924'.toNumber().should.be.equal(1924);
      '&é"0qsd}{['.toNumber().should.be.equal(0);
    });

    it('should return NaN if there is no number in string', () => {
      'test test'.toNumber().should.be.NaN;
    });
  });
});