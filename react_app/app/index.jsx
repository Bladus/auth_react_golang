import React from 'react';
import ReactDOM from 'react-dom';
import DefaultLayout from 'components/App';
import Index from 'components/Index';
import Login from 'components/Login';
import Session from 'components/Session';
import 'scss/main.scss';

import {StoreProvider} from 'utils/store';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const render = (
    <StoreProvider>
        <Router>
            <DefaultLayout exact path="/" component={Index} />
            <DefaultLayout exact path="/session" component={Session} />
            <Route exact path="/login" component={Login} />
        </Router>
    </StoreProvider>
)

ReactDOM.render(render, document.getElementById('root'));
