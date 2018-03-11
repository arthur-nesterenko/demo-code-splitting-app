import React, { Fragment } from 'react';
import { Switch, NavLink } from 'react-router-dom';
import screens from './screens'
import RouteWithSubRoutes from './lib/routing/route-with-subroute';
import 'uikit';

const Root = () => (
    <Fragment>
        <nav className="uk-navbar-container" data-uk-navbar>
            <div className="uk-navbar-left">
                <ul className="uk-navbar-nav">
                    <li className="uk-active"><NavLink to="/">Home</NavLink></li>
                    <li className="uk-parent"><NavLink to="/overview">Overview</NavLink></li>
                </ul>
            </div>
        </nav>
        <div className='uk-container'>
            <Switch>
                {screens.map((screen, i) => <RouteWithSubRoutes key={i} {...screen} />)}
            </Switch>
        </div>
    </Fragment>
)


export default Root;