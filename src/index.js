import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const defaultState = {
  speed: 0,
  passengers: null,
  count: 0,
}
// put your reducers here!
const reduxReducer = (state = defaultState, action) => {
  if (action.type === 'GET_SPEED') {
    return {
      ...state,
      speed: parseInt(action.payload)
    }
  } else if (action.type === 'GET_PASSENGERS') {
    return {
      ...state,
      passengers: parseInt(action.payload)
    }
  } else if (action.type === 'GET_COUNT') {
    return {
      ...state,
      count: parseInt(action.payload)
    }
  }

  return state;
}

// be sure to combine your reducers!
const storeInstance = createStore(
  combineReducers({
    storage: reduxReducer,
  }),
  // reducers,
  applyMiddleware(logger)
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));