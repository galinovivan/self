/**
 * Created by ivan on 26.05.17.
 */
import React, { Component } from 'react';
import ActivitySection from './ActivitySection';


class BackendSection extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
    }
    render() {
        let data = [];
        return (
            <div>
                <ActivitySection data={ data }/>
            </div>
        )
    }
}


export default BackendSection;
