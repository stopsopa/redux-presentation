
import { connect } from 'react-redux';

import React, { Component } from 'react';

import List from './List';

import {
    getList
} from '../../reducers';

import {
    onAdd,
    onRemove,
    listLoad
} from '../../actions';

class ListVisible extends Component {
    componentDidMount() {

        const { listLoad } = this.props;

        listLoad();
    }
    render() {
        return (
            <List {...this.props} />
        );
    }
}

const mapStateToProps = state => ({
    list: getList(state)
});

const mapDispatchToProps = {
    onAdd,
    onDelete: onRemove,
    listLoad
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListVisible);