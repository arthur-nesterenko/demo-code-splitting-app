import React from 'react';
import { Route } from 'react-router-dom';


const RouteWithSubRoutes = route => {
    return (
        <Route
            path={route.path}
            render={props => <route.component {...route} {...props} />}
        />
    );
};

export default RouteWithSubRoutes;
