import React, { Component } from 'react';

import store from '../store/Store';



class Summary extends Component {

    constructor(props) {
        super(props);

        this.onDataChange = this.onDataChange.bind(this);
        this.getStateFromStore = this.getStateFromStore.bind(this);

        this.state = this.getStateFromStore();
    }

    getStateFromStore() {
        //getState() 返回的 state 解构就是 Store.js 中定义的 state 解构
        const state = store.getState();
        let sum = 0;
        for (const key in state) {
            if (state.hasOwnProperty(key)) {
                sum += state[key];
            }
        }

        return {sum: sum}
    }

    onDataChange() {
        this.setState(this.getStateFromStore())
    }

    componentDidMount() {
        store.subscribe(this.onDataChange);
    }

    componentWillUnmount() {
        store.unsubscribe(this.onDataChange)
    }

    render() {
        const sum = this.state.sum;
        return (
            <div>Total Count: {sum}</div>
        );
    }
}

export default Summary;