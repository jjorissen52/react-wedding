import React, { Component } from "react";
import {withRouter} from "react-router";
import Page from "../components/Page/Page";


class Food extends Component {
    render() {
        return (
            <div>
                <Page slug={'Catering'}/>
            </div>
        );
    }
}

export default withRouter(Food);