import 'babel-polyfill';
import React from 'react';
import ReactDom from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '@/redux/store';

import App from '@/pages/App';
import '@/static/i/main.less';


ReactDom.render(
    <Provider store={store}>
        <HashRouter>
            <App></App>
        </HashRouter>
    </Provider>,
    document.getElementById('app')
)