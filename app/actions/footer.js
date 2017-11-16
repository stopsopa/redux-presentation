
import {
    FOOTER_POPULATE
} from './types';

export const fetchFooter = () => (dispatch, getState) => new Promise(resolve => {
    setTimeout(() => {

        dispatch({
            type: FOOTER_POPULATE,
            payload: 'FOOTER CONTENT PRERENDERED'
        });

        resolve();

    }, 1500);
});

