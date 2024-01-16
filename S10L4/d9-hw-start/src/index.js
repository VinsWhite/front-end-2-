import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import App from './App';

ReactDOM.render(
    //provider è un componente di react redux che fornisce l'accesso allo store
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
