import React, { Component } from "react";
import {withRouter} from "react-router";
import Page from "../components/Page/Page";


class Venue extends Component {
    render() {
        return (
            <div>
                <Page slug={'Venue'}/>
            </div>
        );
    }
}

export default withRouter(Venue);