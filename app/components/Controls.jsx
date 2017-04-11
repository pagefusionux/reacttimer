const React = require('react');

const Controls = React.createClass({
  propTypes: {
    countdownStatus: React.PropTypes.string.isRequired,
    onStatusChange: React.PropTypes.func.isRequired
  },
  onStatusChange: function(newStatus) {
    // currying pattern (pass a function that returns a function)
    return () => {
      console.log(newStatus);
      this.props.onStatusChange(newStatus); // pass back to parent functionality
    }
  },
  render: function () {
    const {countdownStatus} = this.props;
    
    const renderStartStopButton = () => {
      if (countdownStatus === 'started') {
        // render pause button
        return <button className="button secondary" onClick={this.onStatusChange('paused')}>Pause</button>;
      } else if (countdownStatus === 'paused') {
        // render start button
        return <button className="button primary" onClick={this.onStatusChange('started')}>Start</button>;
      }
    };
    
    return (
      <div className="controls">
        {renderStartStopButton()}
        <button className="button alert" onClick={this.onStatusChange('stopped')}>Clear</button>
      </div>
    );
  }
});

module.exports = Controls;