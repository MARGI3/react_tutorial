import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as Actions from '../action/Actions';

class Counter extends Component{

    //这里的自定义构造函数 需要透传 context
    //另一种写法
    //constructor() {
    // super(...arguments)
    //
    // *****其他代码*****
    // }
    constructor(props, context) {
        super(props, context);

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

        const value = this.context.store.getState()[this.props.name];
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
        this.context.store.dispatch(Actions.increment(this.props.name))
    }

    onDecrement() {
        // let value = this.state.value - 1;
        // this.setState({'value': value});
        this.context.store.dispatch(Actions.decrement(this.props.name))
    }

    componentDidMount() {
        this.context.store.subscribe(this.onDataChange);
    }

    componentWillUnmount() {
        this.context.store.unsubscribe(this.onDataChange);
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

//标明当前Counter组件 是需要访问 Context 的，并且标明了 context 结构
//这里标明的 context 结构必须与 Provider 中定义的一致
Counter.contextTypes = {
   store: PropTypes.object
};

export default Counter;