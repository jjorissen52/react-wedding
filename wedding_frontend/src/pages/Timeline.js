import React, { Component } from "react";
import {withRouter} from "react-router";
import Page from "../components/Page/Page";


class Timeline extends Component {
    render() {
        return (
            <div>
                <Page slug={'Timeline'}/>
            </div>
        );
    }
}

export default withRouter(Timeline);