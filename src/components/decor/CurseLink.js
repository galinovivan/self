/**
 * Created by 91178 on 27.05.2017.
 */
import React, { Component } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import './curseLink.css';


class CurseLink extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isHidden: this.props.isHidden
        };
        this.onLinkClick = this.onLinkClick.bind(this);
    }
    onLinkClick(e) {
       e.preventDefault();
       this.setState(prevState => ({
           isHidden: !prevState.isHidden
       }))
    }

    render() {
        return (
            <div className="curse_link">
                <CSSTransitionGroup
                    transitionName="example"
                    transitionAppear = {true}
                    transitionAppearTimeout = {500}
                    transitionEnter = {false} transitionLeave = {false}>
                    <a href={ this.props.link } onClick={ this.onLinkClick } className={
                    this.state.isHidden ? 'hidden' : ''
                }>{ this.props.label }</a>
                </CSSTransitionGroup>

            </div>
        )
    }
}


export default CurseLink;
