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
//const Weather = require('Weather');
//const About = require('About');
//const Examples = require('Examples');

// load Foundation (using style and css loaders)
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

// app css
require('style!css!sass!applicationStyles');

// router implementation
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      {/*
      <Route path="about" component={About}/>
      <Route path="examples" component={Examples}/>
      <IndexRoute component={Weather}/> {/* Must use IndexLink or it takes the nested page and makes both nav pages bold */}
      */}
    </Route>
  </Router>,
  document.getElementById('app')
);
