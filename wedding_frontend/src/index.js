import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Stuff from "./pages/Stuff";
import Venue from "./pages/Venue";
import Food from "./pages/Food";
import Gifts from "./pages/Gifts";
import Timeline from "./pages/Timeline";


ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route exact path="/" component={App}/>
            <Route path="/Food" component={Food}/>
            <Route path="/Venue" component={Venue}/>
            <Route path="/Gifts" component={Gifts}/>
            <Route path="/Timeline" component={Timeline}/>
        </div>
    </BrowserRouter>, document.getElementById('root')
);
registerServiceWorker();
