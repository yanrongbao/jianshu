import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { actionCreators as loginActionCreators } from 'views/pages/login/store';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';
import { domRotate360deg } from 'utils/dom';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Additon,
    Button,
    SearchWrapper,
    SearchInfo,
    SearchInfoList,
    SearchInfoSticth,
    SearchInfoTtile,
    SearchInfoItem
} from './style';
const betaImg = require('../../statics/images/beta.png')
class Header extends Component {
    render () {
        const {
            focused,
            handleInputFocus,
            handleInputBlur,
            login,
            list,
            loginOut
        } = this.props;
        return (
            <HeaderWrapper>
                <Link to="/">
                    <Logo />
                </Link>
                <Nav>
                    <NavItem className="left active">
                        <i className="iconfont">&#xe8d0;</i>
                        发现
                    </NavItem>
                    <NavItem className="left"><i className="iconfont">&#xe614;</i>关注</NavItem>
                    <NavItem className="left"><i className="iconfont">&#xe634;</i>消息</NavItem>
                    {login ? (
                        <NavItem className="right" onClick={loginOut}>
                            退出
                        </NavItem>
                    ) : (
                            <Link to="/login">
                                <NavItem className="right">登录</NavItem>
                            </Link>
                        )}
                    <NavItem className="right beta-img-box">
                        <img className="beta-img"
                            src={betaImg}
                            alt="" />
                    </NavItem>
                    <NavItem className="right">
                        <i className="iconfont">&#xe636;</i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch
                                className={focused ? 'focused' : ''}
                                onFocus={() => handleInputFocus(list)}
                                onBlur={handleInputBlur}
                            />
                        </CSSTransition>
                        <i
                            className={
                                focused
                                    ? 'focused iconfont zoom'
                                    : 'iconfont zoom'
                            }
                        >
                            &#xe62f;
                        </i>
                        {this.getListArea()}
                    </SearchWrapper>
                </Nav>
                <Additon>
                    <Link to="/index/write">
                        <Button className="writting">
                            <i className="iconfont">&#xe615;</i>
                            写文章
                        </Button>
                    </Link>
                    <Button className="reg">注册</Button>
                </Additon>
            </HeaderWrapper>
        );
    }

    getListArea () {
        const {
            focused,
            list,
            page,
            totalPage,
            mouseIn,
            handleMouseEnter,
            handleMouseLeave,
            handlePageChange
        } = this.props;
        const newList = list.toJS();
        const pageList = [];
        if (newList.length) {
            for (let index = (page - 1) * 10; index < page * 10; index++) {
                pageList.push(
                    <SearchInfoItem key={newList[index]}>
                        {newList[index]}
                    </SearchInfoItem>
                );
            }
            console.log(pageList)
        }
        if (focused || mouseIn) {
            return (
                <SearchInfo
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <SearchInfoTtile>
                        热门搜索
                        <SearchInfoSticth
                            onClick={() =>
                                handlePageChange(page, totalPage, this.spinIcon)
                            }
                        >
                            <i
                                ref={icon => {
                                    this.spinIcon = icon;
                                }}
                                className="iconfont spin"
                            >
                                &#xe851;
                            </i>
                            换一批
                        </SearchInfoSticth>
                    </SearchInfoTtile>
                    <SearchInfoList>{pageList}</SearchInfoList>
                </SearchInfo>
            );
        } else {
            return null;
        }
    }
}
const mapStateToProps = state => {
    return {
        focused: state.getIn(['header', 'focused']),
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        totalPage: state.getIn(['header', 'totalPage']),
        mouseIn: state.getIn(['header', 'mouseIn']),
        login: state.getIn(['login', 'login'])
    };
};
const mapDispatchToProps = dispatch => {
    return {
        handleInputFocus (list) {
            (list.size === 0) && dispatch(actionCreators.getList());
            dispatch(actionCreators.input_focus_on());
        },
        handleInputBlur () {
            dispatch(actionCreators.input_focus_off());
        },
        handleMouseEnter () {
            dispatch(actionCreators.mouse_enter());
        },
        handleMouseLeave () {
            dispatch(actionCreators.mouse_leave());
        },
        handlePageChange (page, totalPage, spinIcon) {
            domRotate360deg(spinIcon);
            if (page < totalPage) {
                dispatch(actionCreators.page_change(page + 1));
            } else {
                dispatch(actionCreators.page_change(1));
            }
        },
        loginOut () {
            dispatch(loginActionCreators.loginOut());
        }
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);
