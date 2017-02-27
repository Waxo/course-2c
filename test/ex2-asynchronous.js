const chai = require('chai');
const sinon = require('sinon');

chai.should();
chai.use(require('sinon-chai'));

const {countToFive} = require('../app/ex2-asynchronous');

describe('app/ex2-asynchronous.js', () => {
  describe('#countToFive', () => {
    let clock;
    beforeEach(() => {
      clock = sinon.useFakeTimers();
    });

    afterEach(() => {
      clock.restore();
      if (console.log.restore) {
        console.log.restore();
      }
    });

    it('should count to five and stop after', () => {
      const stubConsoleLog = sinon.stub(console, 'log');

      countToFive();
      clock.tick(1001);
      stubConsoleLog.should.not.have.been.calledWith(0);
      stubConsoleLog.should.have.been.calledWith(1);
      stubConsoleLog.should.not.have.been.calledWith(2);
      clock.tick(1001);
      stubConsoleLog.should.have.been.calledWith(2);
      stubConsoleLog.should.not.have.been.calledWith(3);
      clock.tick(1001);
      stubConsoleLog.should.have.been.calledWith(3);
      stubConsoleLog.should.not.have.been.calledWith(4);
      clock.tick(1001);
      stubConsoleLog.should.have.been.calledWith(4);
      stubConsoleLog.should.not.have.been.calledWith(5);
      clock.tick(1001);
      stubConsoleLog.should.have.been.calledWith(5);
      stubConsoleLog.should.not.have.been.calledWith(6);
      clock.tick(1001);
      stubConsoleLog.should.not.have.been.calledWith(6);

      stubConsoleLog.should.have.been.callCount(5);

      console.log.restore();
    });
  });
});
