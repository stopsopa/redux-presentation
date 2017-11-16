
import React from 'react';

import { connect } from 'react-redux';

import Footer from './Footer';

import {
    getFooter
} from '../reducers';

export default connect(state => ({
    text: getFooter(state)
}))(Footer);
