import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Header from 'component/header';
import { actionCreators } from 'views/pages/login/store';
import RouterView from 'router/views/routerView';

class Layout extends PureComponent {
    render () {
        const { routes } = this.props;
        return (
            <div>
                <Header />
                <RouterView routes={routes} />
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
export default connect(mapState, mapDispatch)(Layout)