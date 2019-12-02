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
export const LoginBox = styled.div`
    width: 400px;
    margin: 100px auto;
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
export const InputBox = styled.div`
position: relative;
width: 100%;
i{
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
span{
    position: absolute;
    top: 20px;
    right: 5px;
    font-size: 12px;
    color: red;
}
`

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
margin: 15px 0;
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
export const Button = styled.div`
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
`;
