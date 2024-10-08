import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import App from './App';
import { BrowserRouter, Link} from 'react-router-dom';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <BrowserRouter>
    <App/>
    </BrowserRouter>);