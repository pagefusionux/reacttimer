const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const $ = require('jQuery'); // as in webpack.config.js
const TestUtils = require('react-addons-test-utils');

const CountdownForm = require('CountdownForm');

describe('CountdownForm', () => {
  
  // see if CountdownForm exists
  it('should exist', () => {
    expect(CountdownForm).toExist();
  });
  
  // integration of spies (https://github.com/mjackson/expect (near bottom: (spy) )
  it('should call onSetCountdown if valid seconds entered', () => { // tests a value submission and React 'handle' function via 'spy'
    const spy = expect.createSpy();
  
    // we need to render the Clock into virtual Chrome instance to test this function out
    const countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
    const $el = $(ReactDOM.findDOMNode(countdownForm));
    
    // value to test
    countdownForm.refs.seconds.value = '109';
    
    // simulate submit
    TestUtils.Simulate.submit($el.find('form')[0]); // pass in DOM node
  
    // assert
    expect(spy).toHaveBeenCalledWith(109);
  });
  
  it('should not call onSetCountdown if invalid seconds entered', () => {
    const spy = expect.createSpy();
    
    const countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
    const $el = $(ReactDOM.findDOMNode(countdownForm));
  
    // value to test
    countdownForm.refs.seconds.value = 'asdf';
    
    // simulate submit
    TestUtils.Simulate.submit($el.find('form')[0]); // pass in DOM node
  
    // assert
    expect(spy).toNotHaveBeenCalled();
  });
});