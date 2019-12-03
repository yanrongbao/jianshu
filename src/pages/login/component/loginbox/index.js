import React, { PureComponent } from 'react';
import { Form, InputBox, Input, Button, Remember, MoreSign } from '../../style';
import { actionCreators } from '../../store';
import { Validator } from 'utils/form/index';
import { connect } from 'react-redux';
import { Message } from 'utils/ui/index';
class LoginBox extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            validator: null,
        }
    }

    render () {
        return (
            <div>
                <Form>
                    <InputBox className="restyle">
                        <Input
                            name="name"
                            placeholder="手机号或邮箱"
                            ref={input => {
                                this.username = input;
                            }}
                        />
                        <i className="iconfont">&#xe612;</i>

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
                        onClick={() => this.submit()}
                    >
                        登录
                            </Button>
                    <span className="tip">{this.state.errorMsg}</span>
                </Form>
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
            </div>
        )
    }
    checkFromRules () {
        const validator = new Validator();
        validator.add(this.username, [
            {
                strategy: 'isNonEmpty',
                errorMsg: '用户名不能为空'
            }
        ])
        validator.add(this.password, [
            {
                strategy: 'isNonEmpty',
                errorMsg: '密码不能为空'
            }
        ])
        const errorMsg = validator.start();
        return errorMsg;
    }
    submit () {
        const errorMsg = this.checkFromRules();
        if (errorMsg) {
            const message = new Message();
            message.show({
                type: 'warn',
                text: errorMsg,
                duration: 2000,    // 不会自动消失
            });
            return false;
        } else {
            this.props.loginUser(
                this.username,
                this.password
            )
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
)(LoginBox);
