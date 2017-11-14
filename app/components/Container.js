
import React, { Component } from 'react';

import { Route, Switch, Redirect, withRouter, Link } from 'react-router-dom';

import routes from '../routes';

export default () => (
    <div>
        <Switch>
            {routes.map((route, i) => <Route key={i} {...route} />)}

            <Route render={
                () => (
                    <Redirect to="/list"/>
                )
            }/>
        </Switch>
        <hr/>
        <Link to="/test">go to test...</Link>
    </div>
);
