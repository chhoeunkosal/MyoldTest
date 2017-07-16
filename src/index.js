import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route} from 'react-router-dom';
import './index.css';
import App from './App';

//import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route component={App}/>
            <Route path='home'/>
        </div>
    </BrowserRouter>,
document.getElementById('root')
);