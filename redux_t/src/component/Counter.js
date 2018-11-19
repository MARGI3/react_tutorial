import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as Actions from '../action/Actions';
import store from '../store/Store';

class Counter extends Component{

    constructor(props) {
        super(props);

        this.onDecrement = this.onDecrement.bind(this);
        this.onIncrement = this.onIncrement.bind(this);
        this.onDataChange = this.onDataChange.bind(this);

        this.state = this.getStateFromStore();
    }

    getStateFromStore() {
        //store.getState()[this.props.caption]
        //等同于
        // store.getState().caption = this.props.caption
        //参考es6属性名表达式

        const value = store.getState()[this.props.name];
        return {value: value, [this.props.name]: this.props.name}
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     return (nextProps.name !== this.props.name)
    //         || (nextState.value !== this.state.value);
    // }

    onDataChange() {
        this.setState(this.getStateFromStore());
    }

    onIncrement() {
        // let value = this.state.value + 1;
        // this.setState({'value': value});
        store.dispatch(Actions.increment(this.props.name))
    }

    onDecrement() {
        // let value = this.state.value - 1;
        // this.setState({'value': value});
        store.dispatch(Actions.decrement(this.props.name))
    }

    componentDidMount() {
        store.subscribe(this.onDataChange);
    }

    componentWillUnmount() {
        store.unsubscribe(this.onDataChange);
    }

    render() {

        const value = this.state.value;
        //对象解构赋值
        const {name} = this.state;

        return (
            <div>
                <button style={buttonStyle} onClick={this.onIncrement}>+</button>
                <button style={buttonStyle} onClick={this.onDecrement}>-</button>
                <span>{name} count: {value}</span>
            </div>
        );
    }

}

const buttonStyle = {
    margin: '10px'
};

Counter.propTypes = {
   name: PropTypes.string.isRequired
};

export default Counter;