const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const $ = require('jQuery'); // as in webpack.config.js
const TestUtils = require('react-addons-test-utils');

const Countdown = require('Countdown');

describe('Countdown', () => {
  
  // see if Countdown exists
  it('should exist', () => {
    expect(Countdown).toExist();
  });
  
  describe('handleSetCountdown', () => {
    it('should set state to started and count down', (done) => { // asynchronous test used
      const countdown = TestUtils.renderIntoDocument(<Countdown/>);
      
      countdown.handleSetCountdown(10);
      
      // assert
      expect(countdown.state.count).toBe(10);
      expect(countdown.state.countdownStatus).toBe('started');
      
      setTimeout(() => { // after a second, the count should be 9
        expect(countdown.state.count).toBe(9);
        done(); // this must be called because this is asynchronous
      }, 1001);
    });
  
    it('should never set count less than 0', (done) => { // asynchronous test used (done used)
      const countdown = TestUtils.renderIntoDocument(<Countdown/>);
    
      countdown.handleSetCountdown(1);
    
      // assert
      setTimeout(() => { // after a second, the count should be 9
        expect(countdown.state.count).toBe(0);
        done(); // this must be run because this is asynchronous
      }, 3001);
    });
  
    it('should pause countdown on paused status', (done) => {
      const countdown = TestUtils.renderIntoDocument(<Countdown/>);
    
      countdown.handleSetCountdown(3);
      
      countdown.handleStatusChange('paused');
      
      // assert
      setTimeout(() => { // after a second, the count should be 9
        expect(countdown.state.count).toBe(3);
        expect(countdown.state.countdownStatus).toBe('paused');
        done(); // this must be run because this is asynchronous
      }, 1001);
    });
  
    it('should reset count on stopped status', (done) => {
      const countdown = TestUtils.renderIntoDocument(<Countdown/>);
    
      countdown.handleSetCountdown(3);
    
      countdown.handleStatusChange('stopped');
    
      // assert
      setTimeout(() => { // after a second, the count should be 9
        expect(countdown.state.count).toBe(0);
        expect(countdown.state.countdownStatus).toBe('stopped');
        done(); // this must be run because this is asynchronous
      }, 1001);
    });
  });
  
});