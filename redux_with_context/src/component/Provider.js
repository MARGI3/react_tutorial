import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Provider extends Component {

    getChildContext() {
        return {
            'store': this.props.store
        };
    }

    render() {
        return this.props.children;
    }

}

//1. 表明Provider 是一个 context 提供者，并且标明 context 的结构
//2. childContextTypes  和 getChildContext 两者是相互对应的 （定义的 context 结构必须相同）
Provider.childContextTypes = {
  store: PropTypes.object
};

//store 是Provider props 的必要属性
Provider.propTypes = {
    store: PropTypes.object.isRequired
};

export default Provider;


