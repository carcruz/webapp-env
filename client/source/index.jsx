import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import store from './store';
import Root from './components/Root';

render(<Root store={store} />, document.getElementById('app'));
