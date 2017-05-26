/**
 * Created by ivan on 25.05.17.
 */
import React, { Component } from 'react';
import './Header.css';
import Birds from "./Birds";
import MainHeading from "./MainHeading";
import Cloud from "../decor/Cloud";


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {}

    }
    render() {
        return (
            <header>
                <div className="header_top">
                    <div className="column_4">
                        <Birds/>
                    </div>
                    <div className="column_4">
                        <MainHeading/>
                    </div>
                    <div className="column_4">
                        <Cloud/>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;