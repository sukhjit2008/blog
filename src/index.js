import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import reducers from './reducers/index';
import thunk from 'redux-thunk';
import './index.css';
import { createStore, applyMiddleware } from 'redux';
const store = createStore(reducers,applyMiddleware(thunk))
ReactDOM.render(<Provider store={store}><App/></Provider>,document.querySelector('#root'))