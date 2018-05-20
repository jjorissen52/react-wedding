import React, { Component } from 'react';
import Link from "react-router-dom/es/Link";

class Header extends Component {
    render() {
        return (
            <header id={"header"}>
                <div className="logo" >
                    <Link to='/' id={"brand"}>Wedding Home</Link>
                </div>
                <a href="#menu" onClick={this.props.action}><span>Menu</span></a>
            </header>
        )
    }
}

export default Header;