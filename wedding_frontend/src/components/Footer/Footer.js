import React, { Component } from 'react';

class Footer extends Component{
    render() {
        return (
            <footer id="footer">
                <div className="inner">
                    <h2>Contact Us</h2>
                    <form action="/contact/" method="post">
                        <label htmlFor="id_name">Name:</label>
                        <input type="text" name="name" maxLength="100" required="" id="id_name"/>
                        <label htmlFor="id_email">Email:</label>
                        <input type="email" name="email" required="" id="id_email"/>
                        <label htmlFor="id_message">Message:</label>
                        <textarea name="message" cols="40" rows="10" required="" id="id_message"></textarea>
                        <br/>
                        <ul className="actions">
                            <li><input value="Send Message" className="button alt" type="submit"/></li>
                        </ul>
                    </form>
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