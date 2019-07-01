import React from 'react';
import { connect } from 'react-redux';
import { INPUT_FOCUS_ON, INPUT_FOCUS_OFF } from '../../store/actionsTypes';
import { CSSTransition } from 'react-transition-group';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Additon,
    Button,
    SearchWrapper
} from './style';
const Header = props => {
    return (
        <HeaderWrapper>
            <Logo />
            <Nav>
                <NavItem className="left active">首页</NavItem>
                <NavItem className="left">下载APP</NavItem>
                <NavItem className="right">登录</NavItem>
                <NavItem className="right">
                    <i className="iconfont">&#xe636;</i>
                </NavItem>
                <SearchWrapper>
                    <CSSTransition
                        in={props.focused}
                        timeout={200}
                        classNames="slide"
                    >
                        <NavSearch
                            className={props.focused ? 'focused' : ''}
                            onFocus={props.handleInputFocus}
                            onBlur={props.handleInputBlur}
                        />
                    </CSSTransition>

                    <i
                        className={
                            props.focused ? 'focused iconfont' : 'iconfont'
                        }
                    >
                        &#xe62f;
                    </i>
                </SearchWrapper>
            </Nav>
            <Additon>
                <Button className="writting">
                    <i className="iconfont">&#xe615;</i>
                    写文章
                </Button>
                <Button className="reg">注册</Button>
            </Additon>
        </HeaderWrapper>
    );
};
const mapStateToProps = state => {
    return {
        focused: state.focused
    };
};
const mapDispatchToProps = dispatch => {
    return {
        handleInputFocus() {
            const action = {
                type: INPUT_FOCUS_ON
            };
            dispatch(action);
        },
        handleInputBlur() {
            const action = {
                type: INPUT_FOCUS_OFF
            };
            dispatch(action);
        }
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);
