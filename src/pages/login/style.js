import styled from 'styled-components';

export const LoginWrapper = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    top: 0px;
    background: #eee;
`;
export const Logo = styled.div`
    width: 100px;
    position: absolute;
    top: 56px;
    margin-left: 50px;
    img{
        width:100%;
    }
`;
export const Loginflex = styled.div`
    width:100%;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height:100%;
`;
export const LoginContent = styled.div`
    width: 400px;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
    padding: 50px 50px 30px;
    box-sizing: border-box;
    .title{
        margin: 0 auto 50px;
        padding: 10px;
        color: #969696;
        text-align:center;
        span{
            padding: 10px;
            font-size:18px;
            cursor:pointer;
            &.active{
                font-weight: 700;
                color: #ea6f5a;
                border-bottom: 2px solid #ea6f5a;
            }
        }
        span:hover{
            border-bottom: 2px solid #ea6f5a;
        }
        b{
            padding: 10px;
            font-weight:700;
        }
    }
`;
export const Form = styled.form`
position: relative;
.tip{
    position: absolute;
    top: 105px;
    right: 5px;
    font-size: 12px;
    color: red;
}
`;
export const InputBox = styled.div`
position: relative;
width: 100%;
>i{
    position: absolute;
    top: 14px;
    left: 10px;
    font-size: 18px;
    color: #969696;
}
&.restyle{
    input{
        border-bottom: none;
        border-radius: 4px 4px 0 0;
    }
}
&.no-radius{
    input{
        border-bottom: none;
        border-radius: 0;
    }
   
}
`;
export const Input = styled.input`
width: 100%;
height: 50px;
margin-bottom: 0;
padding: 4px 12px 4px 35px;
border: 1px solid #c8c8c8;
border-radius: 0 0 4px 4px;
background-color: hsla(0,0%,71%,.1);
vertical-align: middle;
box-sizing: border-box;
`;
export const Remember = styled.div`
display:flex;
justify-content:space-between;
align-items: center;
margin: 20px 0;
span{
    margin-left: 5px;
    font-size: 15px;
    color: #969696;
    vertical-align: middle;
}
.forget-btn{
    font-size: 14px;
    color:#999;
    &:hover{
        color: #333;
    }
}
`;
export const MoreSign = styled.div`
margin-top: 50px;
h6{
    position: relative;
    margin: 0 0 10px;
    font-size: 12px;
    color: #b5b5b5;
    text-align:center;
    &:before{
        content: "";
        border-top: 1px solid #b5b5b5;
        display: block;
        position: absolute;
        width: 60px;
        top: 5px;
        left: 30px;
    }
    &:after{
        content: "";
        border-top: 1px solid #b5b5b5;
        display: block;
        position: absolute;
        width: 60px;
        top: 5px;
        right: 30px;
    }
}
ul{
    margin-bottom: 10px;
    list-style: none;
    text-align:center;
    li{
        margin: 0 5px;
        display: inline-block;
        a{
            width: 50px;
            height: 50px;
            line-height: 50px;
            display: block;
            i{
                font-size: 28px;
                &.ic-weibo{
                    color: #e05244;
                }
                &.ic-wechat{
                    color: #00bb29;
                }
                &.ic-qq_connect{
                    color: #498ad5;
                }
            }
        }
    }
}
`;
export const Button = styled.button`
    margin-top: 20px;
    width: 100%;
    padding: 11px 18px;
    font-size: 18px;
    border: none;
    border-radius: 25px;
    color: #fff;
    background: #3194d0;
    box-sizing: border-box;
    text-align:center;
    cursor:pointer;
    &.sign-up-button{
        background: #42c02e;
    }
`;
export const Verfybutton = styled.button`
    position: absolute;
    top: 7px;
    right: 7px;
    width: 100px;
    height: 36px;
    font-size: 13px;
    color: #fff;
    background-color: #42c02e;
    border-radius: 20px;
    line-height: 36px;
    text-align:center;
    border:none;
    cursor:pointer;
`;
export const ToolTip = styled.div`
    font-size: 14px;
    position: absolute;
    z-index:10;
    opacity:.9;
    transform: translate(100%,-50%);
    top: 50%;
    right: -8px;
    .tooltip-arrow {
        position: absolute;
        width: 0;
        height: 0;
        border-color: transparent;
        border-style: solid;
        left: 0;
        margin-top: -5px;
        border-width: 5px 5px 5px 0;
        top: 50%;
        &.tooltip-arrow-border {
            border-right-color: #ea6f5a;
            left:-5px;
        }
        &.tooltip-arrow-bg{
            border-right-color: #fff;
            left:-3px;
        }
    }
    .tooltip-inner {
        color: #333;
        border-radius: 4px;
        border: 1px solid #ea6f5a;
        background-color: #fff;
        padding: 5px 10px;
        display: flex;
        align-items: center;
        color:#333;
        i{
            margin-right: 5px;
            font-size: 20px;
            color: #ea6f5a;
        }
    }
`;