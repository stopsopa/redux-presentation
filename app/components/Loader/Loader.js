
import React, { Component } from 'react';

import './Loader.scss';

export default class Loader extends Component {
    render() {

        const text = "Loading...";

        return (
            <div className="loader-component">{text}</div>
        );
    }
}