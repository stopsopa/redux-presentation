
import React, { Component } from 'react';

import { Route, Switch, Redirect, withRouter, Link } from 'react-router-dom';

import routes from '../routes';

import FooterVisible from './FooterVisible';

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
        <Link to="/test" style={{float:'right'}}>go to test...</Link>
        <hr/>
        <FooterVisible />
    </div>
);
