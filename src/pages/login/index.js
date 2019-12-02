import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { LoginWrapper, LoginBox, InputBox, Input, Button, Logo, Remember, MoreSign } from './style';
import { actionCreators } from './store';
import { Redirect } from 'react-router';

class Login extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: true
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
                    <LoginBox>
                        <div className="title">
                            <span onClick={() => { this.handleLoginPage(this.state.isLogin) }} className={this.state.isLogin ? 'active' : ''}>登录</span>
                            <b>·</b>
                            <span onClick={() => { this.handleLoginPage(this.state.isLogin) }} className={this.state.isLogin ? '' : 'active'}>注册</span>
                        </div>
                        <form>
                        <InputBox className="restyle">
                            <Input
                                name="name"
                                placeholder="手机号或邮箱"
                                ref={input => {
                                    this.username = input;
                                }}
                            />
                            <i className="iconfont">&#xe612;</i>
                            <span>手机号或者邮箱不能为空</span>
                        </InputBox>
                        <InputBox>
                            <Input
                                name="password"
                                type="password"
                                placeholder="密码"
                                ref={input => {
                                    this.password = input;
                                }}
                            />
                            <i className="iconfont">&#xe600;</i>
                        </InputBox>
                        <Remember>
                            <div className="remember-btn">
                                <input type="checkbox" />
                                <span>记住我</span>
                            </div>
                            <div className="forget-btn">登录遇到问题?</div>
                        </Remember>
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
                        </form>
                        <MoreSign>
                            <h6>社交帐号登录</h6>
                            <ul>
                                <li>
                                    <a href>
                                        <i className="iconfont ic-weibo">&#xe63d;</i>
                                    </a>
                                </li>
                                <li>
                                    <a href>
                                        <i className="iconfont ic-wechat">&#xe659;</i>
                                    </a>
                                </li>
                                <li>
                                    <a href>
                                        <i className="iconfont ic-qq_connect">&#xe601;</i>
                                    </a>
                                </li>
                            </ul>
                        </MoreSign>

                    </LoginBox>
                </LoginWrapper>
            );
        } else {
            return <Redirect to="/" />;
        }
    }
    handleLoginPage (isLogin) {
        this.setState({
            isLogin: !isLogin
        })
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
