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
    width: 280px;
    float: right;
`;

export const TopicWrapper = styled.div`
    overflow: hidden;
    padding: 20px 0 10px 0;
    margin-left: -18px;
    border-bottom: 1px solid #dcdcdc;
`;
export const TopicItem = styled.div`
    float: left;
    background: #f7f7f7;
    height: 32px;
    line-height: 32px;
    font-size: 14px;
    margin-left: 18px;
    margin-bottom: 18px;
    color: #000;
    border: 1px solid #dcdcdc;
    padding-right: 10px;
    border-radius: 4px;
    .TopicItem-image {
        margin-right: 10px;
        display: block;
        float: left;
        width: 32px;
        height: 32px;
    }
`;
export const ListItem = styled.div`
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
    overflow: hidden;
    .list-pic {
        width: 120px;
        height: 100px;
        display: block;
        float: right;
    }
`;
export const ListInfo = styled.div`
    width: 500px;
    float: left;
    .title {
        line-height: 27px;
        font-size: 18px;
        font-weight: bold;
        color: #2f2f2f;
    }
    .desc {
        font-size: 13px;
        line-height: 24px;
        color: #999;
    }
`;
export const RecommendWrapper = styled.div`
    margin: 30px 0;
    width: 280px;
`;
export const RecommendItem = styled.div`
    height: 50px;
    width: 280px;
    background: url(${props => props.imgUrl});
    background-size: contain;
`;

export const ListMore = styled.div`
    width: 100%;
    height: 40px;
    line-height: 40px;
    background: #a5a5a5;
    border-radius: 20px;
    color: #fff;
    margin: 30px 0;
    cursor: pointer;
    text-align: center;
`;
export const BackTop = styled.div`
    position: fixed;
    right: 100px;
    bottom: 30px;
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    border: 1px solid #ccc;
`;
