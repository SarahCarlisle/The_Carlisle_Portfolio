import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

// THIS COMPONENT IS OUR STATUS PAGE
// YOU SHOULD DISPLAY THE CURRENT SPEED FROM SECTION ONE
// YOU SHOULD DISPLAY THE COUNT OF PEOPLE CURRENTLY ON BOARD

class Dashboard extends Component {
  componentDidMount = () => {
    const storage = this.props.storage;
    if (!storage.speed ||
      !storage.passengers ||
      !storage.count) {
    }
  }

  onChange = (event) => {
    event.preventDefault();
    console.log(this.props.storage);

    axios.post('/storage', this.props.storage)
        .then((response) => {
            this.props.dispatch({
                type: 'GET_COUNT'
            })
        })
}

  render() {
    const {
      speed,
      count,
    } = this.props.storage;

    return (
      <div>
        <h2>Dashboard</h2>

        <p>SPEED: {speed}</p>
        <p>PASSENGER COUNT: {count}</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
      storage: state.storage
  }
}

export default connect(mapStateToProps)(Dashboard);