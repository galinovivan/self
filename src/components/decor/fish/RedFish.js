/**
 * Created by 91178 on 28.05.2017.
 */
import React, { Component } from 'react';
import Fish from './Fish';

class RedFish extends Component {
    render() {
        return (
            <div className="redFish">
                <Fish path="red"/>
            </div>
        )
    }
}

export default RedFish;