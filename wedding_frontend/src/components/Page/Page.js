import React, { Component } from "react";
import Content from "../Page/Content";
import Header from "../../components/Header/Header";
import Nav from "../../components/Nav/Nav";
import Footer from "../Footer/Footer";

class Page extends Component {
    constructor(props){
        super(props);
        this.toggleMenu = this.toggleMenu.bind(this);
        this.state = {
            menu_class: "close",
            contents: [],
            slug: this.props.slug,
        }
    }
    componentDidMount(){
        fetch('http://api:8000/api/pages/' + this.state.slug)
            .then(results => {return results.json()})
            .then(data => {
                let contents = data.contents.slice();
                this.setState({contents: contents})
            })
    }
    renderContent(header, description, link, background){
        return <Content header={header} description={description} link={link} style={background}/>
    }
    toggleMenu(){
        this.setState({menu_class: this.state.menu_class === 'close'? 'visible': 'close'});
    }
    render() {
        return (
            <div>
                <Header action={this.toggleMenu}/>
                <Nav action={this.toggleMenu} menu_class={this.state.menu_class}/>
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