import React from 'react';
import { DockableSagaView } from 'redux-saga-devtools'
import { monitor } from './redux/store';
import { Switch, NavLink } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import screens from './screens'
import RouteWithSubRoutes from './lib/routing/route-with-subroute';
import 'uikit';

const Root = () => (
    <div>
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to React</h1>
            </header>
            <nav className="uk-navbar-container" data-uk-navbar>
                <div className="uk-navbar-left">
                    <ul className="uk-navbar-nav">
                        <li className="uk-active"><NavLink to="/">Home</NavLink></li>
                        <li className="uk-parent"><NavLink to="/overview">Overview</NavLink></li>
                    </ul>
                </div>
            </nav>

            <Switch>
                {screens.map((screen, i) => <RouteWithSubRoutes key={i} {...screen} />)}
            </Switch>

        </div>
        <DockableSagaView monitor={monitor} />
    </div>
)


export default Root;