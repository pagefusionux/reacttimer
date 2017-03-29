# React Timer

Setting up unit testing:
- `$ npm install karma@0.13.22 karma-chrome-launcher@0.2.2 karma-mocha@0.2.2 karma-mocha-reporter@2.0.0 karma-sourcemap-loader@0.3.7 karma-webpack@1.7.0 mocha@2.4.5 expect@1.14.0 --save-dev`
- (see karma-runner.github.io)
- (see mochajs.org)
- Create `/karma.conf.js` at project root.
- Create `/app/tests` folder.
- Create `/app/tests/app.test.jsx` and create first test.
- Edit `/package.json` under the 'scripts' object and change value of 'test' property:
  - "test": "karma start",

Run first test:
- $ npm test

---
Udemy Tutorial:
https://www.udemy.com/the-complete-react-web-app-developer-course