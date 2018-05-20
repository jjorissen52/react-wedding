import React, { Component } from "react";
import {withRouter} from "react-router";
import Content from "../components/Page/Content";

class Venue extends Component {
    render() {
        return (
            <div>
                <Content header={FPContent.header} description={FPContent.description}/>
            </div>
        );
    }
}

const FPContent = {
    header: 'test header',
    description: 'test description'
};

export default withRouter(Venue);