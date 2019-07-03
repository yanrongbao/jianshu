import styled from 'styled-components';
export const HomeWrapper = styled.div`
    width: 960px;
    margin: 0 auto;
    overflow: hidden;
`;
export const HomeLeft = styled.div`
    width: 625px;
    margin-left: 15px;
    padding-top: 30px;
    float: left;
    .banner-image {
        width: 625px;
        height: 270ox;
    }
`;

export const HomeRight = styled.div`
    width: 240px;
    float: right;
`;

export const TopicWrapper = styled.div`
overflow: hidden;
padding:20px 0 10px 0;
margin-left:-18px;
`;
export const TopicItem = styled.div`
float: left;
background:#f7f7f7;
height:32px;
line-height:32px;
font-size:14px;
margin-left:18px
margin-bottom:18px
color:#000;
border:1px solid #dcdcdc;
padding-right:10px;
border-radius:4px;
.TopicItem-image{
margin-right: 10px;
    display:block;
    float:left;
    width:32px;
    height:32px;
}
`;
