/*
* @Author: RoyChen
* @Date:   2016-03-22 15:39:57
* @Last Modified by:   Roy
* @Last Modified time: 2017-01-12 18:58:53
*/

import React, { Component, PropTypes } from 'react';

export default class ClickOutside extends Component {
    constructor(props) {
        super(props);
        
        this.handleDocumentClick = this.handleDocumentClick.bind(this);

    }

    componentDidMount(){
        document.addEventListener('click', this.handleDocumentClick)
    }

    componentWillUnmount(){
        document.addEventListener('click', this.handleDocumentClick)
    }

    handleDocumentClick(e){
        const el = this.container;
        const { handleOutsideClick } = this.props;
        if (!el.contains(e.target)){
            handleOutsideClick(e)
        }
    }

    render(){
        const { children, handleOutsideClick, ...props } = this.props;
        return (
            <div {...props} ref = {ref => this.container = ref}>
                {children}
            </div>
        )
    }
}

ClickOutside.defaultProps = {
    handleOutsideClick: () => {
        // 默认值
    }
}


ClickOutside.propTypes = {
    handleOutsideClick: PropTypes.func.isRequired
};


