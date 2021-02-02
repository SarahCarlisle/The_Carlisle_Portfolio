import React, { Component } from 'react';
import { connect } from 'react-redux';
// THIS COMPONENT IS OUR INTERFACE FOR SPEED
// YOU SHOULD DISPLAY THE CURRENT SPEED
// BUTTONS SHOULD INCREASE OR DECREASE SPEED, RESPECTIVELY

class SpeedControl extends Component {
  constructor(props) {
    super(props);
    this.state = { speed: 0 };

    this.onClick = this.onClick.bind(this);
  }

  onClick = (event) => {
    event.preventDefault();
    this.props.dispatch({
      type: "GET_SPEED",
      payload: this.state.storage
    })
    this.setState({
      storage: 0
    })
  };

  handleSpeedIncrease = () => {
    this.setState({ speed: this.state.speed + 1 })
  };

  handleSpeedDecrease = () => {
    this.setState({ speed: this.state.speed - 1 })
  };


  render() {
    console.log(this.props);

    return (
      <div>
        <h2>Speed Control</h2>

        <button onClick={this.handleSpeedIncrease}>Increase Speed</button>
        <p>SPEED:</p>
        <span>{this.formatSpeedIncrease()}</span>
        <br />
        <br />
        <button onClick={this.handleSpeedDecrease}>Decrease Speed</button>
      </div>
    )
  }
  formatSpeedIncrease() {
    const { speed } = this.state;
    return speed === 0 ? '-' : speed;
  }
  formatSpeedDecrease() {
    const { speed } = this.state;
    return speed === 0 ? '-' : speed;

  }
}

export default connect()(SpeedControl);