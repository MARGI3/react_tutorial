import * as ActionTypes from '../action/ActionTypes';

export default (state, action) => {
    const {counterCaption} = action;

    switch (action.type) {
        case ActionTypes.INCREMENT:
            return {...state, [counterCaption]: state[counterCaption] + 1};
        case ActionTypes.DECREMENT:
            return {...state, [counterCaption]: state[counterCaption] - 1};
        default:
            return state
    }
}

//const {counterCaption} = action

//参考es6 对象解构赋值
//等同于
//const value = action.counterCaption


//return {...state, [counterCaption]: state[counterCaption] + 1}

//参考es6
// 对象扩展操作符
// ...state
// 等同于
// Object.assign()

//属性名表达式
// [counterCaption]: state[counterCaption] + 1
// 等同于
// [counterCaption] ---> 表达式 counterCaption 的 value 作为 属性名称
// state[counterCaption] + 1  ---> state.counterCaption + 1

