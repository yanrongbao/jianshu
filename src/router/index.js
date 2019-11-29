import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router'
import Header from 'component/header';
import Home from 'pages/home';
import Detail from 'pages/detail/loadable';
import Login from 'pages/login';
import Write from 'pages/write';
export default () => (
    <div>
        <BrowserRouter>
            <Header />
            <Route path="/" exact component={Home} />
            <Route path="/login/" exact component={Login} />
            <Route path="/write/" exact component={Write} />
            <Route path="/detail/:id" exact component={Detail} />
        </BrowserRouter>
        <BrowserRouter>
            <Route path="/login" exact component={Login} />
        </BrowserRouter>
    </div>

)