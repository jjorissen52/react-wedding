import React, { Component } from 'react';
import {API_CONFIG} from "../Config/api-config";

const initialState = {
    name: "",
    email: "",
    message: "",
};

class Footer extends Component{
    constructor(props){
        super(props);
        this.state = initialState;
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleMessageChange = this.handleMessageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleNameChange(event) {
        this.setState({name: event.target.value});
    }
    handleEmailChange(event) {
        this.setState({email: event.target.value});
    }
    handleMessageChange(event) {
        this.setState({message: event.target.value});
    }
    handleSubmit(event){
        event.preventDefault();
        fetch(API_CONFIG.api_email_url, {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(results => {return results.json()})
          .then(data => {
              if (!data.errors){
                  this.setState(initialState);
              }
              this.setState({results: data.results, errors: data.errors});
            });
        event.preventDefault();
    }
    renderMessage(){
        // only render when we know the results of an email.
        if (this.state.results){
            return (
                <article className="box" id="/gifts/">
                    <div className="content">
                        {this.state.results}
                    </div>
                </article>
            )
        }
        else if (this.state.errors){
            return (
                <div>
                    <div className="alert alert-danger" role="alert" style={{maxWidth: "90%", margin: "auto"}}>
                        {this.state.errors}
                    </div>
                    <br/>
                    <br/>
                </div>
            )
        }
    }
    render() {
        return (
            <footer id="footer">
                <div className="inner">
                    <h2>Contact Us</h2>
                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" maxLength="100" required="" id="name"
                               value={this.state.name} onChange={this.handleNameChange}/>
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" required="" id="email"
                               value={this.state.email} onChange={this.handleEmailChange}/>
                        <label htmlFor="message">Message:</label>
                        <textarea name="message" cols="40" rows="10" required="" id="message"
                                  value={this.state.message} onChange={this.handleMessageChange}/>
                        <br/>
                        <ul className="actions">
                            <li><input value="Send Message" className="button alt" type="submit"/></li>
                        </ul>
                    </form>
                    {this.renderMessage()}
                    <div className="copyright">
                        Design: <a href="https://templated.co">TEMPLATED</a>. Images: <a
                        href="https://unsplash.com">Unsplash</a>.
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;