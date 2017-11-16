
import {
    FOOTER_POPULATE
} from '../actions/types';

export default (state = 'default footer content [def redux state]', action) => {
    switch (action.type) {
        case FOOTER_POPULATE:
            return action.payload;
        default:
            return state;
    }
}

export const getFooter = state => state;