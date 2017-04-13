const React = require('react');
const Clock = require('Clock');

const Timer = React.createClass({
  render: () => {
    return (
      <div>
        <h1 className="page-title">Timer</h1>
        <Clock totalSeconds={129} />
      </div>
    );
  }
});

module.exports = Timer;
