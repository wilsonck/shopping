import React from 'react';
import ReactDOM from 'react-dom';

import App from './app/App/App';

//Integration Redux
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import './sass/base/_reset.scss';

const store = configureStore();

const app = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));