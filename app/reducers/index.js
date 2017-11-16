

import { combineReducers } from 'redux';

import loader, * as fromLoader from './loader';

import list, * as fromList from './list';

import footer, * as fromFooter from './footer';

const reducers = combineReducers({
    loader,
    list,
    footer
});

export default reducers;

export const getLoader = state =>
    fromLoader.getLoader(state.loader)
;

export const getList = state =>
    fromList.getList(state.list)
;

export const getFooter = state =>
    fromFooter.getFooter(state.footer)
;