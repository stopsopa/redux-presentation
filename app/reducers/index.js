

import { combineReducers } from 'redux';

import loader, * as fromLoader from './loader';

import list, * as fromList from './list';

const reducers = combineReducers({
    loader,
    list
});

export default reducers;

export const getLoader = state =>
    fromLoader.getLoader(state.loader)
;

export const getList = state =>
    fromList.getList(state.list)
;

// export const getFormValue = (state, key) =>
//     fromForm.getValue(state.form, key);
//
// export const getFormData = state => ({
//     laststatus  : getFormValue(state, 'laststatus'),
//     interval    : getFormValue(state, 'interval'),
//     url         : getFormValue(state, 'url'),
// });