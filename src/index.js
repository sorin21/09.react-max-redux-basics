import React from 'react';
import ReactDOM from 'react-dom';
// install --save redux
import { createStore } from "redux";
// install --save react-redux
import { Provider } from "react-redux";
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducer from './store/reducer';

const store = createStore(reducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
