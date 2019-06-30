import styled from 'styled-components';
import logopng from '../../statics/logo.png'
export const HeaderWrapper = styled.div`
    position:relative;
    height:58px;
    border-bottom:1px solid #f0f0f0;
`;

export const Logo = styled.a.attrs({
    href: '/'
})`
position:absolute;
top:0px;
left:0ox;
display:block;
padding-right:70px;
box-sizing:border-box;
width:100px;
background:url(${logopng});
height:56px;
background-size:contain;
`;

export const Nav = styled.div`
width:960px;
height:100%;
margin:0 auto;
`;

export const NavItem = styled.div`
line-height:56px;
font-size:17px;
padding:0 15px;
color:#333;
    &.left{
        float:left;
    }
    &.right{
        float:right;
        color:#969696;
    }
    &.active{
        color:#ea6f5a;
    }
    
`;

export const SearchWrapper = styled.div`
float:left;
position:relative;
.iconfont{
    position:absolute;
    right:5px;
    bottom:5px;
    width:30px;
    height:30px;
    border-radius:15px;
    text-align:center;
    line-height:30px;
}
`;
export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
width:240px;
height:38px;
margin-top:9px;
padding:0 20px;
margin-left:20px;
box-sizing:border-box;
border:none;
outline:none;
border-radius:19px;
background:#eee;
font-size:14px;
&::placeholder{
    color:#999;
}
`;
export const Additon = styled.div`
position:absolute;
right:0px;
top:0px;
height:56px;
`;

export const Button = styled.div`
float:right;
line-height:38px;
margin-top:9px;
border-radius:19px;
border:1px solid #ec6149;
margin-right:20px;
padding:0 20px;
&.reg{
    color: #ec6149;
}
&.writting{
    background:#ec6149;
    color:#fff;
}
`;