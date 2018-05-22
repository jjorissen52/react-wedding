import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import './App.css';
import './assets/css/main.css';
import './assets/css/wedding.css';

import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Content from "./components/Page/Content";

import FreedomNight from './assets/images/NightRiverView.jfif'
import Time from './assets/images/Time.jpg'
import Food from './assets/images/Food.jpg'
import Gift from './assets/images/Gift.jpg'


class App extends Component {
    constructor(props){
        super(props);
        this.toggleMenu = this.toggleMenu.bind(this);
        this.state = {
            menu_class: "close"
        }
    }
    toggleMenu(){
        this.setState({menu_class: this.state.menu_class === 'close'? 'visible': 'close'});
    }
    renderContent(header, description, link, background, id) {
        return <Content header={header} description={description} link={link}
                        style={background} id={id}/>;
    }
    render() {
        return (
            <div className="App">
                <Header action={this.toggleMenu}/>
                <Nav action={this.toggleMenu} menu_class={this.state.menu_class}/>
                <Banner/>
                <div className="content" id={"content"}>
                    {
                        HomeContent.map((item, index) => (
                            this.renderContent(item.header, item.description, item.link, ContentStyles[index], item.link)
                        ))
                    }
                </div>
                <Footer/>
            </div>
        );
    }
}

const HomeContent = [
    {
        header: 'Freedom Point',
        description: 'Freedom Point is a beautiful building with a breathtaking view over the Cumberland River at Liberty Park. We hope you like it as much as we do!',
        link: "/venue/",
    },
    {
        header: 'WEDDING PLAN TIMELINE',
        description: 'Come see our wedding plans progress!',
        link: "/timeline/"
    },
    {
        header: 'FOOD AND BEVERAGES',
        description: 'We haven\'t picked a caterer yet.',
        link: "/food/"
    },
    {
        header: 'WEDDING PLAN TIMELINE',
        description: 'Come see our wedding plans progress!',
        link: "/gifts/"
    },
];

const ContentStyles = [
    {backgroundImage: `url(${FreedomNight})`},
    {backgroundImage: `url(${Time})`},
    {backgroundImage: `url(${Food})`},
    {backgroundImage: `url(${Gift})`},
];

export default App;
