import React, { PureComponent } from 'react';
import { Form, InputBox, Input, Button, MoreSign, Verfybutton, ToolTip } from '../../style';
import { actionCreators } from '../../store';
import { Validator } from 'utils/form/index';
import { connect } from 'react-redux';
import { Message } from 'utils/ui/index';
import { stopDefault, countdownEvent } from 'utils/dom';
import { requiteCreateUserApi, requireCheckUserApi } from 'apis/user';
class RegisterBox extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isSendMsg: false,
            sendButtonText: '发送验证码',
            isNameRepeat: false
        }
    }
    render () {
        const { isNameRepeat } = this.state;
        return (
            <div>
                <Form>
                    <InputBox className="restyle">
                        <Input
                            name="name"
                            placeholder="你的昵称"
                            ref={input => {
                                this.username = input;
                            }}
                            onBlur={() => this.checkDuplicateName(this.username.value)}
                        />
                        <i className="iconfont">&#xe612;</i>
                        {isNameRepeat ? <ToolTip>
                            <div className="tooltip-arrow tooltip-arrow-border"></div>
                            <div className="tooltip-arrow tooltip-arrow-bg"></div>
                            <div className="tooltip-inner">
                                <i className="iconfont iconcuowu ic-error"></i>
                                <span>昵称已被使用，换一个吧</span>
                            </div>
                        </ToolTip> : ''}

                    </InputBox>
                    <InputBox className="restyle no-radius">
                        <Input
                            name="phone"
                            placeholder="手机号"
                            onInput={() => this.checkPhone(this.phone.value)}
                            ref={input => {
                                this.phone = input;
                            }}
                        />
                        <i className="iconfont">&#xe6c1;</i>
                    </InputBox>
                    <InputBox className="restyle no-radius">
                        <Input
                            name="verificationCode"
                            placeholder="手机验证码"
                            ref={input => {
                                this.verificationCode = input;
                            }}
                        />
                        <i className="iconfont">&#xe6c1;</i>
                        <Verfybutton onClick={(e) => this.getVerificationcode(e, 60)} disabled={!this.state.isSendMsg}>{this.state.sendButtonText}</Verfybutton>
                    </InputBox>
                    <InputBox>
                        <Input
                            name="password"
                            type="password"
                            placeholder="设置密码"
                            ref={input => {
                                this.password = input;
                            }}
                        />
                        <i className="iconfont">&#xe600;</i>
                    </InputBox>
                    <Button disabled={isNameRepeat} className="sign-up-button"
                        onClick={(e) => this.submit(e)}
                    >
                        注册
                    </Button>
                    <span className="tip">{this.state.errorMsg}</span>
                </Form>
                <MoreSign>
                    <h6>社交帐号直接注册</h6>
                    <ul>
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
        validator.add(this.phone, [
            {
                strategy: 'isMobile',
                errorMsg: '请输入正确手机号'
            }
        ])
        validator.add(this.verificationCode, [
            {
                strategy: 'isNonEmpty',
                errorMsg: '请输入验证码'
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
    async submit (e) {
        stopDefault(e);
        const errorMsg = this.checkFromRules();
        if (errorMsg) {
            const message = new Message();
            message.show({
                type: 'warn',
                text: errorMsg,
                duration: 2000,    // 不会自动消失
            });
        } else {
            const result = await requiteCreateUserApi(
                this.username.value,
                this.password.value,
                this.phone.value,
                this.verificationCode.value
            )
            console.log(result)
        }
    }
    async checkDuplicateName (name) {
        if (name) {
            const result = await requireCheckUserApi(name);
            this.setState({
                isNameRepeat: result.success ? false : true
            }, () => {
                console.log(this.state.isNameRepeat)
            })

        } else {

        }

    }
    checkPhone (value) {
        if (value.length === 11) {
            const errorMsg = Validator.check(this.phone, [
                {
                    strategy: 'isMobile',
                    errorMsg: '请输入正确手机号'
                }
            ])
            if (!errorMsg) {
                this.setState({
                    isSendMsg: true
                })
            }
        }
    }
    getVerificationcode (e, second) {
        stopDefault(e);
        this.setState({
            isSendMsg: false,
            sendButtonText: `${second}秒后重新发送`
        })
        countdownEvent(second, (time) => {
            this.setState({
                sendButtonText: `${time}秒后重新发送`
            })
            if (time === 0) {
                this.setState({
                    isSendMsg: true,
                    sendButtonText: `发送验证码`
                })
            }
        })
    }
}
const mapState = state => ({
});
const mapDispatch = dispatch => ({
    checkUser (name) {
        dispatch(actionCreators.checkUser(name));
    }
});
export default connect(
    mapState,
    mapDispatch
)(RegisterBox);
