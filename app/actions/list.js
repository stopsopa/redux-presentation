
import {
    LIST_ADD,
    LIST_REMOVE
} from './types';

import uuid4 from 'uuid/v4';

export const onAdd = value => ({
    type: LIST_ADD,
    payload: {
        id: uuid4(),
        name: value
    }
});

export const onRemove = id => ({
    type: LIST_REMOVE,
    payload: id
});
