import React, { Component } from "react";
import {withRouter} from "react-router";
import Page from "../components/Page/Page";


class Gifts extends Component {
    render() {
        return (
            <div>
                <Page slug={'Gifts'}/>
            </div>
        );
    }
}

export default withRouter(Gifts);