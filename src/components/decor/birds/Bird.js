/**
 * Created by 91178 on 27.05.2017.
 */
import React, { Component } from 'react';
import bird from './bird.svg';


class Bird extends Component {
    render() {
        return (
            <div>
               <img src={ bird } width={ this.props.birdWidth } />
            </div>
        )
    }
}


export default Bird;
