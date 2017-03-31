const React = require('react');
const Clock = require('Clock');

const Timer = React.createClass({
  render: () => {
    return (
      <div>
        <p>Timer</p>
        <Clock totalSeconds={129} />
      </div>
    );
  }
});

module.exports = Timer;
