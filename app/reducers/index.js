

import { combineReducers } from 'redux';

import loader, * as fromLoader from './loader';

const reducers = combineReducers({
    loader
});

export default reducers;

export const getLoader = state =>
    fromLoader.getLoader(state.loader)
;

// export const getFormValue = (state, key) =>
//     fromForm.getValue(state.form, key);
//
// export const getFormData = state => ({
//     laststatus  : getFormValue(state, 'laststatus'),
//     interval    : getFormValue(state, 'interval'),
//     url         : getFormValue(state, 'url'),
// });