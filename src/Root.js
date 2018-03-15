import React, { Fragment } from 'react';
import { Switch } from 'react-router-dom';
import { NavLink } from './shared/components/ui'
import screens from './screens'
import RouteWithSubRoutes from './lib/routing/route-with-subroute';
import 'uikit';

const Root = () => (
    <Fragment>
        <header className='uk-section-primary'>
            <nav className="uk-navbar-container uk-navbar-transparent" data-uk-navbar>
                <div className="uk-navbar-left">
                    <ul className="uk-navbar-nav">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/overview">Overview</NavLink>
                    </ul>
                </div>
            </nav>
        </header>
        <div className='uk-container uk-margin'>
            <Switch>
                {screens.map((screen, i) => <RouteWithSubRoutes key={i} {...screen} />)}
            </Switch>
        </div>
        <footer className='uk-section-primary'>
            <div className='uk-padding-lrge uk-text-left'>&#9400;</div>
        </footer>
    </Fragment>
)


export default Root;