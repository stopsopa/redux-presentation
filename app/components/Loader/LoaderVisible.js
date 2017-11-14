
import React from 'react';

import { connect } from 'react-redux';

import Loader from './Loader';

import {
    getLoader
} from '../../reducers';

const mapStateToProps = state => ({
    loading: getLoader(state)
});

export default connect(mapStateToProps)(Loader);