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
    padding: 0px 0 20px;
    border-bottom: 1px solid #dcdcdc;
    overflow: hidden;
    display:flex;
    margin:0 0 15px
    .list-pic {
        width: 150px;
        height: 100px;
        align-self: center;
    } 
`;
export const ListInfo = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 10px;
    .title {
        line-height: 27px;
        font-size: 18px;
        font-weight: bold;
        color: #2f2f2f;
        margin-bottom: 4px;
    }
    .desc {
        font-size: 13px;
        line-height: 24px;
        margin: 0 0 8px;
        color: #999;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
    }
    .toolbar{
        font-size:12px;
        display:flex;
        line-height: 20px;
        span{
            margin-right:12px;
            align-self: center;
            i{
                font-size:14px;
                margin-right: 5px;
            }
        }
        .meta{
            color: #ea6f5a;
        }
        .nickname {
           color:rgb(180, 180, 180);
        }
        .nickname:hover {
            color:#787878;
        }
        span{
            color:#b4b4b4;
        }
        .ic-list-comments:hover{
            color:rgb(120, 120, 120);;
        }
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
    right: 40px;
    bottom: 30px;
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    border: 1px solid #ccc;
`;
export const WriteWrapper = styled.div`
    .head{
        font-size: 14px;
        color: #969696;
        display:flex;
        justify-content: space-between;
        align-items: center;
        .change-authors{
            cursor:pointer;
            display: flex;
            &:hover{
                color: #787878
            }
        }
    }
    .list{
        .list-item{
            padding:10px 0px;
            display:felx;
            a{
                margin-right: 10px;
                display:block;
                .img-box{
                    width:48px;
                        height:48px;
                    img{
                        width:100%;
                        height:100%;
                        border: 1px solid #ddd;
                        border-radius: 50%;
                    }
                }
            }
            .info{
                width:222px;
                padding: 5px 0px;
                >div:first-child{
                    display:flex;
                    align-items: center;
                    justify-content: space-between;
                    .name{
                        font-size:14px;
                    }
                    .follow{
                        font-size: 13px;
                        color: #42c02e;
                    }
                }
               
                >div:last-child{
                    margin-top: 12px;
                    font-size: 12px;
                    color: #969696;
                    span{
                        margin-right:12px;
                    }
                }
            }
        }
        
    }
`;