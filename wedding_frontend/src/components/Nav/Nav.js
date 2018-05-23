import React, { Component } from 'react';
import Link from "react-router-dom/es/Link";
import {API_CONFIG} from "../Config/api-config";

class Nav extends Component{
    constructor(props){
        super(props);
        this.state = {
            pages: [],
        }
    }
    componentDidMount(){
        fetch('http://' + window.location.host + API_CONFIG.api_pages_url)
            .then(results => {return results.json()})
            .then(data => {
                let pages = data.slice();
                this.setState({pages: pages})
            })
    }
    renderLink(page, index){
            return (
                <li key={index}>
                    <Link to={'/' + page.slug}>{page.slug}</Link>
                </li>
            )
    }
    render() {
        return (
            <div>
                {/*<header id={"header"}>*/}
                    {/*<a href="#menu" onClick={()=>this.toggleMenu()}><span>Menu</span></a>*/}
                {/*</header>*/}
                <nav id="menu" className={this.props.menu_class}>
                    <ul className="links">
                        {
                            this.state.pages.map((page, index) =>
                                (this.renderLink(page, index))
                            )
                        }
                        <a href="#menu" className="close" onClick={this.props.action} />
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Nav;