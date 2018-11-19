import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import ControlPanel from "./component/ControlPanel";
import Provider from "./component/Provider";
import store from "./store/Store";

ReactDOM.render(<Provider store={store}><ControlPanel/></Provider>, document.getElementById('root'));

//Provider 负责提供全局 store，并通过 context 特性 将 store 暴露出去
//Counter  通过context 属性可以直接访问 全局唯一的 store 对象
//避免了 Counter 中单独依赖 store 的问题，可以让 Counter 更好的复用

// <Provider/>              store
// |                          |
// |--- <ControlPanel/>       |
// |                          |
// |------------------<Counter/>


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
