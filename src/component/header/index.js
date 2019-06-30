import React, { Component } from 'react';
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Additon, Button, SearchWrapper } from './style'
class Header extends Component {
    render() {
        return (
            <HeaderWrapper>
                <Logo />
                <Nav>
                    <NavItem className="left active">
                        首页
                    </NavItem>
                    <NavItem className="left">
                        下载APP
                    </NavItem>
                    <NavItem className="right">
                        登录
                    </NavItem>
                    <NavItem className="right">
                        <i className="iconfont">&#xe636;</i>
                    </NavItem>
                    <SearchWrapper>
                        <NavSearch></NavSearch>
                        <i className="iconfont">&#xe62f;</i>
                    </SearchWrapper>

                </Nav>
                <Additon>
                    <Button className="writting">
                        <i className="iconfont">&#xe615;</i>
                        写文章</Button>
                    <Button className="reg">注册</Button>
                </Additon>
            </HeaderWrapper>
        )
    }
}
export default Header;