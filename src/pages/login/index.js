import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { LoginWrapper, LoginContent, Logo } from './style';
import { Redirect } from 'react-router';
import { LoginBox, RegisterBox } from './component'

class Login extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            loginName: 'login',
        }
    }
    render () {
        const { login } = this.props;

        if (!login) {
            return (
                <LoginWrapper>
                    <Logo>
                        <img alt="" src={require('statics/images/logo.png')} />
                    </Logo>
                    <LoginContent>
                        <div className="title">
                            <span onClick={() => { this.handleLoginPage('login') }} className={this.state.loginName === 'login' ? 'active' : ''}>登录</span>
                            <b>·</b>
                            <span onClick={() => { this.handleLoginPage('register') }} className={this.state.loginName === 'register' ? 'active' : ''}>注册</span>
                        </div>
                        {this.state.loginName === 'login' ? <LoginBox /> : <RegisterBox />}

                    </LoginContent>
                </LoginWrapper>
            );
        } else {
            console.log(login)
            return <Redirect to="/index/" />;
        }
    }
    handleLoginPage (loginName) {
        this.setState({
            loginName: loginName
        })
    }
}
const mapState = state => ({
    login: state.getIn(['login', 'login'])
});
const mapDispatch = dispatch => ({

});
export default connect(
    mapState,
    mapDispatch
)(Login);
