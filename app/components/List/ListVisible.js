
import { connect } from 'react-redux';

import List from './List';

import {
    getList
} from '../../reducers';

import {
    onAdd,
    onRemove
} from '../../actions';

const mapStateToProps = state => ({
    list: getList(state)
});

const mapDispatchToProps = {
    onAdd,
    onDelete: onRemove
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(List);