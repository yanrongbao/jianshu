import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Header from 'component/header';
import { Route, Switch } from 'react-router-dom';

class Layout extends PureComponent {
    render () {
        return (
            <div>
                <Header />
                <Switch>
                    {
                        this.props.routes.map((route, i) => {
                            return <RouteWithSubRoutes key={i} {...route} />
                        })
                    }
                </Switch>
            </div>
        )
    }
    componentDidMount () {
    }
}
const mapState = state => ({

})
function RouteWithSubRoutes (route) {
    return (
        <Route
            path={route.path}
            render={props => (
                <route.component {...props} routes={route.routes} />
            )}
        />
    );
}
export default connect(mapState, null)(Layout)