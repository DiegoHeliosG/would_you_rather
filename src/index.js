import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import middleware from './middleware';
import 'bootstrap/dist/css/bootstrap.min.css';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(reducer, composeWithDevTools(middleware))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// todo: put non shared function in component
// todo: convention html, css, js
// todo: pass component as a property in question
// todo: REST entity singular or plural?
// todo: success answer: more votes or user answer?
// todo: disable composeWithDevTools

// todo: left aligned text in centered list item
// todo: remove animation on menu
