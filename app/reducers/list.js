
import {
    LIST_ADD,
    LIST_REMOVE,
    LIST_LOAD
} from '../actions/types';

export default (state = [], action) => {
    switch (action.type) {
        case LIST_ADD:
            return [...state, action.payload];
        case LIST_LOAD:
            return action.payload;
        case LIST_REMOVE:
            return state.filter(item => item.id !== action.payload);
        default:
            return state;
    }
}

export const getList = state => state;