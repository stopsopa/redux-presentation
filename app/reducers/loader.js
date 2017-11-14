
import {
    LOADER_ON,
    LOADER_OFF
} from '../actions/types';

export default (state = false, action) => {
    switch (action.type) {
        case LOADER_ON:
            return true;
        case LOADER_OFF:
            return false;
        default:
            return state;
    }
}

export const getLoader = state => state;