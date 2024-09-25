import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import App from './App';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <Router>
        <div>
            <Link to="/app">Go to App</Link>

            <Switch>
                <Route path="/app" component={App} />
            </Switch>
        </div>
    </Router>
);