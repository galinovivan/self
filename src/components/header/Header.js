/**
 * Created by ivan on 25.05.17.
 */
import React, { Component } from 'react';
import HeaderTop from './Header-Top';
import HeaderBottom from './Header-Bottom';
import './Header.css';


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {}

    }
    render() {
        return (
            <div>
                <HeaderTop/>
                <HeaderBottom/>
            </div>
        )
    }
}

export default Header;