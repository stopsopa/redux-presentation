
import {
    LIST_ADD,
    LIST_REMOVE,
    LIST_LOAD
} from './types';

import {
    getLoader
} from '../reducers';

import {
    loaderOn,
    loaderOff
} from './loader';

import { fetchJson } from "../transport";

export const onAdd = name => (dispatch, getState) => {

    dispatch(loaderOn());

    return fetchJson('/api/add', {
        method: 'post',
        body: {
            name
        }
    })
        .then(json => {

            dispatch({
                type: LIST_ADD,
                payload: json.item
            });

            dispatch(loaderOff());
        })
    ;
};

export const onRemove = id => ({
    type: LIST_REMOVE,
    payload: id
});

export const listLoad = () => (dispatch, getState) => {

    const state = getState();

    if ( getLoader(state) ) {

        return Promise.resolve();
    }

    dispatch(loaderOn());

    return fetchJson('/api/list')
        .then(json => {

            dispatch({
                type: LIST_LOAD,
                payload: json.list
            });

            dispatch(loaderOff());
        });
    ;
}
