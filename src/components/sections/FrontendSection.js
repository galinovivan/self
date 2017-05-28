/**
 * Created by ivan on 26.05.17.
 */
import React, { Component } from 'react';
import ActivitySection from './ActivitySection';


class FrontendSection extends Component {
    render() {
        let data = 1;
        return(
            <div>
                <ActivitySection data={ data }/>
            </div>
        )
    }
}


export default ActivitySection;
