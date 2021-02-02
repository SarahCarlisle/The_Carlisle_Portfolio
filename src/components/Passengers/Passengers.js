import React, { Component } from 'react';
import { connect } from 'react-redux';
// THIS COMPONENT IS OUR INTERFACE FOR PASSENGER CHECK IN
// YOU SHOULD DISPLAY THE CURRENT PASSENGERS
// INPUT SHOULD COLLECT INFO, BUTTON SHOULD ADD THEM TO THE LIST

class Passengers extends Component {
  state = {
    passengers: '',
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch({
      type: 'GET_PASSENGERS',
      payload: this.state.passengers
    })
    this.setState({
      passengers: ''
    })
  }
  onChange = (event) => {
    event.preventDefault();
    this.props.dispatch({
      type: 'GET_COUNT',
      payload: this.state.count
    })
    this.setState({
      count: 0,
    })
  }

  handleCount = () => {
    this.setState({ count: this.state.passengers + 0 })
  };

  render() {
    return (
      <div>
        <h2>Passengers</h2>
        <form onSubmit={this.onSubmit}>
          <input required
            value={this.state.passengers}
            onChange={(event) => this.setState({ passengers: event.target.value })} />
          <button type="submit" className="bt">Add Passenger</button>

          <ul>PASSENGER LIST:
            <li>{this.state.passengers}</li>
          </ul>
        </form>
      </div>
    )
  }
}

export default connect()(Passengers);