
import React, { Component } from 'react';

import './Loader.scss';

export default ({ loading }) =>
    loading ? <div className="loader-component">Loading...</div> : null
;