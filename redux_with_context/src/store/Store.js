import {createStore} from 'redux';
import reducer from '../reducer/Reducer';

const initValues = {
    'First': 0,
    'Second': 2,
    'Third': 4,
};

const store = createStore(reducer, initValues);

export default store;