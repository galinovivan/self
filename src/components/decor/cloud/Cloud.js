/**
 * Created by 91178 on 27.05.2017.
 */
import React, { Component } from 'react';
import CurseLink from '../CurseLink';
import cloudPath from './cloud.svg';


class Cloud extends Component {
    render() {
        return (
            <div className="cloud_container">
                <div className="cloud">
                 <img src={ cloudPath } width={ this.props.cloudWidth } />
                <CurseLink link="/" label="example" isHidden={ false } />
                </div>
            </div>
        )
    }
}

export default Cloud;