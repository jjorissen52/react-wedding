import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Content extends Component{
    renderLink(link){
        if (link) {
            return <Link to={this.props.link} className="button alt">Learn More</Link>
        }
    }
    render() {
        return (
            <section id="post" className="wrapper" style={this.props.style}>
                <div className="inner">
                    <article className="box" id={this.props.id}>
                        <header>
                            <h2>{this.props.header}</h2>
                        </header>
                        <div className="content" dangerouslySetInnerHTML={{__html: this.props.description}}/>
                        <br/>
                        <footer>
                            {this.renderLink(this.props.link)}
                        </footer>
                    </article>
                </div>
            </section>
        )
    }
}

export default Content;