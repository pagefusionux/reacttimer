/*
 * React Boilerplate 2
 */

// require react and react-dom
const React = require('react');
const ReactDOM = require('react-dom');

// ES6 "object destructuring syntax"
const {Route, Router, IndexRoute, hashHistory} = require('react-router');

// route/page aliases to be configured in webpack.config.js
const Main = require('Main');
const Timer = require('Timer');
const Countdown = require('Countdown');

// load Foundation (using style and css loaders)
require('style!css!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

// app css
require('style!css!sass!applicationStyles');

// router implementation
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="timer" component={Timer}/>
      <Route path="countdown" component={Countdown}/>
      <IndexRoute component={Timer}/> {/* Must use IndexLink or it takes the nested page and makes both nav pages bold */}
    </Route>
  </Router>,
  document.getElementById('app')
);
