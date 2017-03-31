const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const $ = require('jQuery'); // as in webpack.config.js
const TestUtils = require('react-addons-test-utils');

const Controls = require('Controls');

describe('Controls', () => {
  it('should exist', () => {
    expect(Controls).toExist();
  });
  
  describe('render', () => {
    it('should render pause button when started', () => {
      const controls = TestUtils.renderIntoDocument(<Controls countdownStatus='started'/>);
      const $el = $(ReactDOM.findDOMNode(controls));
      
      // search for the button (text)
      const $pauseButton = $el.find('button:contains(Pause)'); // text: Pause
      
      // assert
      expect($pauseButton.length).toBe(1); // should expect 1 Pause button
    });
  
    it('should render start button when paused', () => {
      const controls = TestUtils.renderIntoDocument(<Controls countdownStatus='paused'/>);
      const $el = $(ReactDOM.findDOMNode(controls));
    
      // search for the button (text)
      const $startButton = $el.find('button:contains(Start)');
    
      // assert
      expect($startButton.length).toBe(1); // should expect 1 Start button
    });
  });
});