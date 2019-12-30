import React from 'react';
import { Route, Switch } from 'react-router-dom';
export default function RouterView (props) {
    return (
        <Switch>
            {
                props.routes.map((route, i) => {
                    return <RouteWithSubRoutes key={i} {...route} />
                })
            }
        </Switch>
    )

}
function RouteWithSubRoutes (route) {
    return (
        <Route
            path={route.path}
            render={props => (
                <route.component {...props} routes={route.children} />
            )}
        />
    );
}