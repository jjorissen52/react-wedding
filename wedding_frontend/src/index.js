import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './index.css';
import './assets/css/main.css';
import './assets/css/wedding.css';
// import App from './components/_Unused/App';
import registerServiceWorker from './registerServiceWorker';
import Venue from "./pages/Venue";
import Food from "./pages/Food";
import Gifts from "./pages/Gifts";
import Timeline from "./pages/Timeline";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/Catering" component={Food}/>
            <Route path="/Venue" component={Venue}/>
            <Route path="/Gifts" component={Gifts}/>
            <Route path="/Timeline" component={Timeline}/>
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);
registerServiceWorker();
