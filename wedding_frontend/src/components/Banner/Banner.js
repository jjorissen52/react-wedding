import React, { Component } from 'react';
import Background from '../../assets/images/holdin-up.jpg'

const bannerStyle ={
    backgroundImage: `url(${Background})`
};

class Banner extends Component{
    render() {
        return (
            /*<section id="banner" style="background-image: url({{ base_background.picture.url }});">*/
            <section id="banner" style={bannerStyle}>
                <div className="inner">
                    <header>
                        <h1>Sarah &amp; JP</h1>
                        <h3>August 11, 2018</h3>
                        <h3>Freedom Point</h3>
                        <h3>Ceremony begins 6:30 PM</h3>
                        <h2></h2>
                    </header>
                </div>
                <a href="#content" className="more scrolly">Learn More</a>
            </section>
        )
    }
}

export default Banner;