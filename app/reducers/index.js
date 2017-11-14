

import { combineReducers } from 'redux';

// import loader, * as fromLoader from './loading';

const reducers = combineReducers({
    default: () => ''
})

export default reducers;

// export const getFormValue = (state, key) =>
//     fromForm.getValue(state.form, key);
//
// export const getFormData = state => ({
//     laststatus  : getFormValue(state, 'laststatus'),
//     interval    : getFormValue(state, 'interval'),
//     url         : getFormValue(state, 'url'),
// });