import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// @ts-ignore
import { Provider } from 'react-redux'
import reportWebVitals from './reportWebVitals';
import store from './redux/store';



const rootElement = document.getElementById('root')


ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
