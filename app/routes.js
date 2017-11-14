
import ListVisible from './components/List/ListVisible';

import { Route, Switch, Redirect, withRouter, Link } from 'react-router-dom';

import React from 'react';

const routes = [
    {
        path: "/list",
        component: ListVisible,
        exact: true
    },
    {
        path: '/test',
        component: () => (<Link to="/list">go back ...</Link>),
        exact: true
    }
];

export default routes;