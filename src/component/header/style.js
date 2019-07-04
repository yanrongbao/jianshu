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
    left: 0ox;
    display: block;
    padding-right: 70px;
    box-sizing: border-box;
    width: 100px;
    background: url(${logopng});
    height: 56px;
    background-size: contain;
`;

export const Nav = styled.div`
    width: 960px;
    height: 100%;
    margin: 0 auto;
`;

export const NavItem = styled.div`
    line-height: 56px;
    font-size: 17px;
    padding: 0 15px;
    color: #333;
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
        display: block;
        float: left;
        font-size: 12px;
        margin-right: 2px;
        transition: all 0.4s ease-in;
        transform-origin: center center;
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
