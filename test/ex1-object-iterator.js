require('chai').should();

const {alphaObject} = require('../app/ex1-object-iterator');

describe('index.js', () => {
  it('should return my object in alphabetical order', () => {
    const objectReturned = alphaObject(
      {c: 12, b: 13, z: 'aze', d: 'qsd', a: 45});

    objectReturned.should.be.deep.equal(
      {a: 45, b: 13, c: 12, d: 'qsd', z: 'aze'});
    JSON.stringify(objectReturned).should.be
      .equal(JSON.stringify({a: 45, b: 13, c: 12, d: 'qsd', z: 'aze'}));
  });
});
