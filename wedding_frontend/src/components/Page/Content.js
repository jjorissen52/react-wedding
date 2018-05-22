import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Content extends Component{
    renderLink(link){
        if (link) {
            return <Link to={this.props.link} className="button alt">Learn More</Link>
        }
    }
    renderInner(){
        if (! this.props.description){
            //return if there is no description so only background renders (for pretty pictures)!
            return
        }
        return (
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
        )

    }
    render() {
        return (
            <section id="post" className="wrapper screen-height" style={this.props.style}>
                {this.renderInner()}
            </section>
        )
    }
}

export default Content;