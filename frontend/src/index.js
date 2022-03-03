import React from 'react';
import ReactDOM from 'react-dom';
import '@/index.css';
import App from '@/App';
import {createStore} from "redux";
import rootReducer from '@store';
import { Provider } from 'react-redux';

const devTool = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(rootReducer, devTool);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
