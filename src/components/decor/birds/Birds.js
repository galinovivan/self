/**
 * Created by 91178 on 27.05.2017.
 */
import React, { Component } from 'react';
import Bird from './Bird';


class Birds extends Component {
    render() {
        return (
            <div className="birds">
                <Bird birdWidth="50"/>
                <Bird birdWidth="50"/>
                <Bird birdWidth="50"/>
            </div>
        )
    }
}


export default Birds;