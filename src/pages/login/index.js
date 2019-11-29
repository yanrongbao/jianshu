import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { LoginWrapper, LoginBox, Input, Button } from './style';
import { actionCreators } from './store';
import { Redirect } from 'react-router';
class Login extends PureComponent {
    render () {
        const { login } = this.props;

        if (!login) {
            return (
                <LoginWrapper>
                    <LoginBox>
                        <Input
                            placeholder="账号"
                            ref={input => {
                                this.username = input;
                            }}
                        />
                        <Input
                            type="password"
                            placeholder="密码"
                            ref={input => {
                                this.password = input;
                            }}
                        />
                        <Button
                            onClick={() =>
                                this.props.loginUser(
                                    this.username,
                                    this.password
                                )
                            }
                        >
                            登录
                        </Button>
                    </LoginBox>
                </LoginWrapper>
            );
        } else {
            return <Redirect to="/" />;
        }
    }
}
const mapState = state => ({
    login: state.getIn(['login', 'login'])
});
const mapDispatch = dispatch => ({
    loginUser (accountElem, passwordElem) {
        dispatch(actionCreators.login(accountElem.value, passwordElem.value));
    }
});
export default connect(
    mapState,
    mapDispatch
)(Login);
