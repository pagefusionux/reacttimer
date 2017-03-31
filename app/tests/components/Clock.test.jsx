const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const $ = require('jQuery'); // as in webpack.config.js
const TestUtils = require('react-addons-test-utils');

const Clock = require('Clock');

describe('Clock', () => {
  // see if Clock exists
  it('should exist', () => {
    expect(Clock).toExist();
  });
  
  describe('render', () => {
    it('should render clock to output', () => {
      // we need to render the Clock into virtual Chrome instance to test this function out
      const clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62}/>);
      
      // convert to jQuery object to easily find text value
      const $el = $(ReactDOM.findDOMNode(clock));
      const actualText = $el.find('.clock-text').text();
      
      // assert
      expect(actualText).toBe('01:02');
    });
  });
  
  // test formatSeconds function
  describe('formatSeconds', () => {
    it('should format seconds', () => {
      
      const clock = TestUtils.renderIntoDocument(<Clock/>);
      
      const seconds = 615; // (10:15)
      const expected = '10:15';
      
      const actual = clock.formatSeconds(seconds);
      
      expect(actual).toBe(expected);
    });
  
    it('should format seconds when min/sec are less than 10', () => {
      // we need to render the Clock to test this function out
      const clock = TestUtils.renderIntoDocument(<Clock/>);
    
      const seconds = 61; // (01:01)
      const expected = '01:01';
    
      const actual = clock.formatSeconds(seconds);
    
      expect(actual).toBe(expected);
    });
  });
  
});








