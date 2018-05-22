import React, { Component } from "react";
import Content from "../Page/Content";
import Header from "../../components/Header/Header";
import Nav from "../../components/Nav/Nav";
import Footer from "../Footer/Footer";
import {API_CONFIG} from "../Config/api-config";

class Page extends Component {
    constructor(props){
        super(props);
        this.toggleMenu = this.toggleMenu.bind(this);
        this.state = {
            menu_class: "close",
            contents: [],
            slug: this.props.slug,
            height: 0,
            width: 0,

        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }
    componentDidMount(){
        fetch(API_CONFIG.api_pages_url + this.state.slug)
            .then(results => {return results.json()})
            .then(data => {
                let contents = data.contents.slice();
                this.setState({contents: contents})
            })
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }
    renderContent(header, description, link, background){
        return <Content header={header} description={description} link={link} style={background}/>
    }
    renderSpaces(){
        if (this.state.width < 490) {
            return <div className="spaces"><br/><br/></div>
        }
    }
    toggleMenu(){
        this.setState({menu_class: this.state.menu_class === 'close'? 'visible': 'close'});
    }
    render() {
        return (
            <div>
                <Header action={this.toggleMenu}/>
                <Nav action={this.toggleMenu} menu_class={this.state.menu_class}/>
                {this.renderSpaces()}
                <div className="content">
                    {
                        this.state.contents.map((item, index) => (
                            this.renderContent(item.header, item.description, item.link,
                                {backgroundImage: "url(" + item.background + ")"})
                        ))
                    }
                </div>
                <Footer/>
            </div>
        );
    }
}


export default Page;