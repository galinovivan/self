/**
 * Created by 91178 on 27.05.2017.
 */
import React, { Component } from 'react';
import CurseLink from './CurseLink';


class Cloud extends Component {
    render() {
        return (
            <div className="cloud_container">
                <div className="cloud"></div>
                <CurseLink link="/" label="example" isHidden="true" />
            </div>
        )
    }
}

export default Cloud;