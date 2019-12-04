import React, { PureComponent } from 'react';
import { Form, InputBox, Input, Button, MoreSign,Verfybutton } from '../../style';
import { actionCreators } from '../../store';
import { Validator } from 'utils/form/index';
import { connect } from 'react-redux';
import { Message } from 'utils/ui/index';
class RegisterBox extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            validator: null,
            isSendMsg:false
        }
    }
    render () {
        const { isNameRepeat } = this.props;
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
                        <Verfybutton disabled={!this.state.isSendMsg}>发送验证码</Verfybutton>
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
                    <Button className="sign-up-button"
                        onClick={() => this.submit()}
                    >
                        {!isNameRepeat ? 'false' : 'true'}
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
        } else {
            this.props.loginUser(
                this.username,
                this.password 
            )
        }
    }
    checkDuplicateName (name) {
        if (name) {
            this.props.checkUser(name)
        }

    }
    checkPhone(value){
        if(value.length===11){
            const errorMsg=Validator.check(this.phone,[
                {
                    strategy: 'isMobile',
                    errorMsg: '请输入正确手机号'
                }
            ])
            if(!errorMsg){
                this.setState({
                    isSendMsg:true
                })
            }
        }
    }
}
const mapState = state => ({
    isNameRepeat: state.getIn(['login', 'isNameRepeat'])
});
const mapDispatch = dispatch => ({
    loginUser (accountElem, passwordElem) {
        dispatch(actionCreators.login(accountElem.value, passwordElem.value));
    },
    checkUser (name) {
        dispatch(actionCreators.checkUser(name));
    }
});
export default connect(
    mapState,
    mapDispatch
)(RegisterBox);
