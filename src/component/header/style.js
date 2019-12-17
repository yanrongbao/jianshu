import styled from 'styled-components';
import logopng from '../../statics/logo.png';
export const HeaderWrapper = styled.div`
    position: relative;
    height: 58px;
    border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    display: block;
    padding-right: 70px;
    box-sizing: border-box;
    width: 100px;
    background: url(${logopng});
    height: 56px;
    background-size: contain;
`;

export const Nav = styled.div`
    width: 930px;
    height: 100%;
    margin: 0 auto;
`;
export const IsLoginDiv = styled.div``;

export const NavItem = styled.div`
    line-height: 56px;
    font-size: 17px;
    padding: 0 15px;
    cursor: pointer;
    color: #333;
    position:relative;
    i{
        font-size:20px;
        margin-right: 5px;
    }
    &.left {
        float: left;
    }
    &.right {
        float: right;
        color: #969696;
    }
    &.active {
        color: #ea6f5a;
    }
    &.beta-img-box{
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .beta-img{
        height:25px;
    }
    .user{
        width:40px;
        height:40px;
        img{
            width:100%;
            border: 1px solid #ddd;
            border-radius: 50%;
            height:100%;
        }
    }
    &.user-box{
        display:flex;
        height:100%;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        position:relative;
        padding-right: 20px;
        &:hover{
            background-color: #f5f5f5;
        }
        &:hover>.dropdown-menu{
             visibility: visible;
        }
        &:before{
            content: "";
            position: absolute;
            top: 50%;
            right: 0px;
            border-left: 5px solid transparent;
            border-right: 5px solid transparent;
            border-top: 6px solid #999;
        }
    }
`;

export const SearchWrapper = styled.div`
    float: left;
    position: relative;
    .zoom {
        position: absolute;
        right: 5px;
        bottom: 5px;
        width: 30px;
        height: 30px;
        border-radius: 15px;
        text-align: center;
        line-height: 30px;
        &.focused {
            background: #777;
            color: #fff;
        }
    }
`;
export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    width: 160px;
    height: 38px;
    margin-top: 9px;
    padding: 0 30px 0 20px;
    margin-left: 20px;
    box-sizing: border-box;
    border: none;
    outline: none;
    border-radius: 19px;
    background: #eee;
    font-size: 14px;
    color: #666;
    &::placeholder {
        color: #999;
    }
    &.focused {
        width: 240px;
    }
    &.slide-enter {
        width: 160px;
        transition: all 0.2s ease-out;
    }
    &.slide-enter-active {
        width: 240px;
    }
    &.slide-exit {
        transition: all 0.2s ease-out;
    }
    &.slide-exit-active {
        width: 160px;
    }
`;
export const SearchInfo = styled.div`
    position: absolute;
    left: 0px;
    top: 60px;
    width: 240px;
    padding: 0 20px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
    background: #fff;
`;
export const SearchInfoTtile = styled.div`
    margin-top: 20px;
    margin-bottom: 15px;
    line-height: 20px;
    font-size: 14px;
    color: #969696;
`;
export const SearchInfoSticth = styled.span`
    float: right;
    font-size: 13px;
    .spin {
        font-size: 12px;
        margin-right: 2px;
    }
`;
export const SearchInfoList = styled.div`
    overflow: hidden;
`;
export const SearchInfoItem = styled.a`
    font-size: 12px;
    padding: 5px;
    line-height: 12px;
    border: 1px solid #ddd;
    color: #787878;
    border-radius: 3px;
    display: block;
    float: left;
    margin-right: 10px;
    margin-bottom: 15px;
`;
export const Additon = styled.div`
    position: absolute;
    right: 0px;
    top: 0px;
    height: 56px;
`;

export const Button = styled.div`
    float: right;
    line-height: 38px;
    margin-top: 9px;
    border-radius: 19px;
    border: 1px solid #ec6149;
    margin-right: 20px;
    padding: 0 20px;
    &.reg {
        color: #ec6149;
    }
    &.writting {
        background: #ec6149;
        color: #fff;
    }
`;
export const DropdownUl = styled.ul`
    border-radius: 0 0 4px 4px;
    margin-top: 0;
    border-color: transparent;
    box-shadow: 0 2px 8px rgba(0,0,0,.1);
    position: absolute;
    min-width: 160px;
    padding: 5px 0;
    margin: 2px 0 0;
    list-style: none;
    font-size: 14px;
    text-align: left;
    background:#fff;
    z-index:100;
    top: 100%;
    left: 0;
    visibility: hidden;
    transition: all .5s linear;
    &:hover{
        // display:block;
    }
`;
export const DropdownLi = styled.li`
    padding: 10px 20px;
    line-height: 30px;
    color: #333;
    display:flex;
    align-items:center;
    i{
        margin-right: 15px;
        font-size: 18px;
        color: #ea6f5a;
    }
    &:hover{
        background-color: #f5f5f5;
    }
`;