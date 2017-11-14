
import React from 'react';

import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

import configPublic from '../public.config';

import Container from './Container';

import Loader from './Loader/Loader';

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
    <Loader key="mainloader"/>,
    <Container key="maincontainer" />
]);

export default Root;
