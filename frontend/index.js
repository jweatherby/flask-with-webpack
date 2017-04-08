import React from 'react';
import ReactDOM from 'react-dom';
import {
    Router, Route, IndexRoute, browserHistory
} from 'react-router';
import bows from 'bows';

import {Home, Homepage, NoMatch} from './components';

const LOGGER = bows('index');

import './main.scss'

const App = props => (
    <Router history={browserHistory}>
        <Route path="/" component={Home}>
            <IndexRoute component={Homepage}/>
        </Route>
        <Route path="*" component={NoMatch}/>
    </Router>
)

ReactDOM.render(
    <App /> ,
    document.getElementById('root')
);
