/**
 * Created by 91178 on 28.05.2017.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Fish extends Component {
    render() {
        return (
            <div className="fish">
                <img src={ this.props.path } />
            </div>
        )
    }
}

Fish.propTypes = {
    path: PropTypes.string.isRequired
};


export default Fish;
