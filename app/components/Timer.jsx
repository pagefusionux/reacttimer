const React = require('react');
const Clock = require('Clock');
const Controls = require('Controls');

const Timer = React.createClass({
  render: function() {
    return (
      <div>
        <p>Timer</p>
        <Clock totalSeconds={129} />
        <Controls/>
      </div>
    );
  }
});

module.exports = Timer;
