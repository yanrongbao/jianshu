import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Header from 'component/header';
import { Route, Switch } from 'react-router-dom';
import RouterGuard from 'router/routerGuard';
import { actionCreators } from 'views/pages/login/store'

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
    componentWillMount () {
        const userInfo = JSON.parse(localStorage.getItem('USERINFO'));
        if (userInfo) {
            this.props.handleLoginState(userInfo)
        }
    }
}
const mapState = state => ({
})
const mapDispatch = dispatch => ({
    handleLoginState (userInfo) {
        dispatch(actionCreators.changeLogin([userInfo]))
    }
})
function RouteWithSubRoutes (route) {
    return (
        <Route
            path={route.path}
            render={props => (
                <RouterGuard {...props} router={route} />
            )}
        />
    );
}
export default connect(mapState, mapDispatch)(Layout)