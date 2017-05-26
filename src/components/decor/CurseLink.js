/**
 * Created by 91178 on 27.05.2017.
 */
import React, { Component } from 'react';


class CurseLink extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isHidden: this.props.isHidden
        }
    }
    render() {
        return (
            <div className="curese_link">
                <a href={ this.props.link } className={
                    this.state.isHidden ? 'hidden' : ''
                }>{ this.props.label }</a>
            </div>
        )
    }
}


export default CurseLink;
