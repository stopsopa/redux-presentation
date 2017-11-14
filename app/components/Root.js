
import React from 'react';

import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

import configPublic from '../public.config';

import Container from './Container';

import LoaderVisible from './Loader/LoaderVisible';

import {
    Button,
    Checkbox,
    Form,
    Header,
    Input,
    Message,
    Icon
} from 'semantic-ui-react'

const Root = () => ([
    <LoaderVisible key="mainloader"/>,
    <Container key="maincontainer" />
]);

export default Root;
