/**
 * Created by ivan on 25.05.17.
 */
import React, { Component } from 'react';
import './Header.css';
import Birds from "../decor/birds/Birds";
import MainHeading from "../decor/MainHeading";
import Cloud from "../decor/cloud/Cloud";
import Iceberg from "../decor/iceberg/Iceberg";


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
                        <Cloud cloudWidth="100"/>
                    </div>
                    <div className="iceberg">
                        <Iceberg/>
                    </div>
                </div>
                <div className="header_bottom">

                </div>
            </header>
        )
    }
}

export default Header;