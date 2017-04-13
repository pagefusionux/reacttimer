const React = require('react');

const CountdownForm = React.createClass({
  handleSubmit: function (e) {
    e.preventDefault();
    const strSeconds = this.refs.seconds.value;
    
    if (strSeconds.match(/^[0-9]*$/)) {
      // do function passed down from parent (via props)
      this.refs.seconds.value = '';
      this.props.onSetCountdown(parseInt(strSeconds, 10)); // 10 = base
    }
  },
  render: function () {
    return (
      <div>
        <form ref="form" onSubmit={this.handleSubmit} className="countdown-form">
          <input type="text" ref="seconds" placeholder="Enter time in seconds." />
          <button className="button expanded">Start</button>
        </form>
      </div>
    );
  }
});

module.exports = CountdownForm;
