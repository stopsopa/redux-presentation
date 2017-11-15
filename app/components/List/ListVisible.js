
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
    listLoad
} from '../../actions';

class ListVisible extends Component {
    static fetchData = (store, routerParams) => {
        return store.dispatch(listLoad());
    }
    getData = () => this.props.listLoad()
    componentDidMount() {

        const { list, history } = this.props;

        (list && list.length) || this.getData();

        (history && history.action === 'PUSH') && this.getData();
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