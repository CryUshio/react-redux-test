import React, { Component, Fragment } from 'react';
import { Route, Redirect, Switch, Link } from 'react-router-dom';

import Topbar from '@/component/Topbar';
import Carousel from '@/component/Carousel';
import Home from '@/pages/Home';
import Page1 from '@/pages/Page1';




export default class App extends Component {
    render() {
        return <Fragment>
            <Topbar username="administrator123456"/>
            <Carousel></Carousel>
            <div className="app-content">
                <ul>
                    <li><Link to="/index">首页</Link></li>
                    <li><Link to="/page1">Page1</Link></li>
                </ul>
                <Switch>
                    <Redirect from='/' to='/index' strict exact />
                    <Route path="/index" component={Home}/>
                    <Route path="/page1" component={Page1}/>
                </Switch>
            </div>
        </Fragment>;
    }
}