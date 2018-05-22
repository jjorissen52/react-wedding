import React, {Component} from "react";
import Content from "../components/Page/Content";
import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";
import {withRouter} from "react-router";
import Footer from "../components/Footer/Footer";

import NotFoundBG from '../assets/images/not_found.png'

class NotFound extends Component {
    constructor(props){
        super(props);
        this.toggleMenu = this.toggleMenu.bind(this);
        this.state = {
            menu_class: "close",
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
                <div className="content" id={"content"}>
                    {
                        NotFoundContent.map((item, index) => (
                            this.renderContent(item.header, item.description, item.link, ContentStyles[index], item.link)
                        ))
                    }
                </div>
                <Footer/>
            </div>
        );
    }
}

const NotFoundContent = [
    {
        header: 'No Such Page',
        description: 'Aw man... You attempted to visit a page that doesn\'t exist',
    }
];

const ContentStyles = [
    {backgroundImage: `url(${NotFoundBG})`},
];

export default withRouter(NotFound);