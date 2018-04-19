// Require axios Get
import { get } from 'axios';
// Init and require store components
import { getState, dispatch, observe } from './store';
// Require actions
import actions from './actions';

console.log('--- client side runing ---');

// Define sample data
const sampleData = [{ x: 'hi' }];

// Dispatch a sample action
dispatch(actions.actionSample(sampleData));

// Subscribe to reducer and trigger and state on change
const unsubscribe = observe(
  state => state.example,
  state => {
    console.log(state);
  }
);

// Test server side api health
get('/health')
  .then(response => {
    document.getElementById('app').innerHTML = `Server health - ${
      response.data.status
    }`;
  })
  .catch(error => {
    document.getElementById('app').innerHTML = 'Error on server health request';
  });
