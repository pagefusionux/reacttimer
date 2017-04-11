const React = require('react');
const Clock = require('Clock');
const CountdownForm = require('CountdownForm');
const Controls = require('Controls');

const Countdown = React.createClass({
  getInitialState: function () {
    return {
      count: 0,
      countdownStatus: 'stopped'
    };
  },
  componentWillUpdate: function (nextProps, nextState) {
  
  },
  componentDidUpdate: function (prevProps, prevState) { // lifecycle
    if (this.state.countdownStatus !== prevState.countdownStatus) { // if not 'stopped'
      switch (this.state.countdownStatus) {
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          this.setState({count: 0});
          //break;
        case 'paused':
          clearInterval(this.timer);
          this.timer = undefined;
          break;
      }
    }
  },
  componentWillMount: function () {
    //console.log('Component will mount.');
  },
  componentDidMount: function () {
    //console.log('Component did mount.');
  },
  componentWillUnmount: function () {
    //console.log('Component will unmount.');
    clearInterval(this.timer);
    this.timer = undefined;
  },
  startTimer: function () {
    this.timer = setInterval(() => {
      let newCount = this.state.count - 1;
      this.setState({
        count: newCount >= 0 ? newCount : 0 // ternary operator
      });
      if (newCount === 0) {
        this.setState({
          countdownStatus: 'stopped' // returns to form input
        });
      }
    }, 1000);
  },
  handleSetCountdown: function (seconds) {
    this.setState({
      count: seconds,
      countdownStatus: 'started'
    });
  },
  handleStatusChange: function(newStatus) {
    this.setState({
      countdownStatus: newStatus
    });
  },
  render: function() {
    const {count, countdownStatus} = this.state;
    
    const renderControlArea = () => {
      if (countdownStatus !== 'stopped') {
        return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>; {/* function to be executed by child component */}
      } else {
        return <CountdownForm onSetCountdown={this.handleSetCountdown}/>;
      }
    };
    
    return (
      <div>
        <h1 className="page-title">Countdown App</h1>
        <Clock totalSeconds={count} />
        {renderControlArea()}
      </div>
    );
  }
});

module.exports = Countdown;
