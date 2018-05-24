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
            <Route exact path="/" component={Home} onUpdate={() => window.scrollTo(0, 0)}/>
            <Route path="/Catering" component={Food} onUpdate={() => window.scrollTo(0, 0)}/>
            <Route path="/Venue" component={Venue} onUpdate={() => window.scrollTo(0, 0)}/>
            <Route path="/Gifts" component={Gifts} onUpdate={() => window.scrollTo(0, 0)}/>
            <Route path="/Timeline" component={Timeline} onUpdate={() => window.scrollTo(0, 0)}/>
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);
registerServiceWorker();
