# ReactBoilerplate3

PHPStorm Setup:
- Rename project.

Git setup:
- Go to https://github.com/pagefusionux
- Create new repository [projectname]
- In [projectname] directory:
  - `$ git init`
  - `$ git add -A`
  - `$ git commit -m 'Initial commit.'`
  - `$ git remote add origin https://github.com/pagefusionux/[projectname].git`
  - `$ git push -u origin master`

Setup npm package requirements as specified in packages.json:
- `$ npm install`

Start express server (have following processes running concurrently):
- (open tab): `$ webpack -w`
- (open tab): `$ node server.js`
- Go to: localhost:3000 (you should see "Boilerplate ready." output to the screen)
---

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
- `$ npm test`

Add react-addons-test (must match react/react-dom package version you're using)
- `$ npm install react-addons-test-utils@0.14.6 --save-dev` 

---
Udemy Tutorial:
https://www.udemy.com/the-complete-react-web-app-developer-course