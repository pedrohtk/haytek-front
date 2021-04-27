import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Main from './components/main'

export default function Routes() {
    return(
        <Router>
            <Route exact path='/' component={Main} />
            <Route path="/main" component={Main} />
        </Router>
    )
}