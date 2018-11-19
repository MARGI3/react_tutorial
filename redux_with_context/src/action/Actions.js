import * as TypeDefine from './ActionTypes';


export const increment = (counterName) => {
    return {
        type: TypeDefine.INCREMENT,
        counterCaption: counterName,
    }
};

export const decrement = (counterName) => {
    return {
        type: TypeDefine.DECREMENT,
        counterCaption: counterName,
    }
};