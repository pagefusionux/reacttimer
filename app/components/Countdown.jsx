var React = require('react');
const Clock = require('Clock');
const Controls = require('Controls');

const Countdown = React.createClass({
  render: function() {
    return (
      <div>
        <p>Countdown</p>
        <Clock totalSeconds={129} />
        <Controls/>
      </div>
    );
  }
});

module.exports = Countdown;
