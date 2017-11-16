
import { connect } from 'react-redux';

import React, { Component } from 'react';

import List from './List';

import {
    getList,
    getLoader
} from '../../reducers';

import {
    onAdd,
    onRemove,
    listLoad,
    fetchFooter
} from '../../actions';

class ListVisible extends Component {
    static fetchData = (store, routerParams) => Promise.all([
        store.dispatch(listLoad()),
        store.dispatch(fetchFooter())
    ])
    getData = () => this.props.listLoad()
    componentDidMount() {

        const { list, history: { action } } = this.props;

        ( ! list || ! list.length || action === 'PUSH' ) && this.getData('first');
    }
    render() {
        return (
            <List {...this.props} />
        );
    }
}

const mapStateToProps = state => ({
    list: getList(state),
    loading: getLoader(state)
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