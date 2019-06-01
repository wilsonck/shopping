import React from 'react';
import ReactDOM from 'react-dom';

import App from './app/App/App';
// import createAppStore from './store';

import './sass/base/_reset.scss';

// const store = createAppStore(history);

const app = (
    <App />
);

ReactDOM.render(app, document.getElementById('root'));