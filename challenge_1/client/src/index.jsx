import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

import App from './components/App.jsx';

const store = createStore(rootReducer, applyMiddleware(thunk));

store.subscribe(() => {
  console.log('index.jsx file:', store.getState());
  console.log('state updated!');
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
