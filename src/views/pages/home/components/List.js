import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { ListItem, ListInfo, ListMore } from '../style';
import { actionCreators } from '../store';
import { Link } from 'react-router-dom';
class List extends PureComponent {
    render () {
        const { articleList, getMoreList, articlePage } = this.props;
        return (
            <div>
                {articleList.map((item, index) => {
                    return (

                        <ListItem>
                            <ListInfo>
                                <Link key={index} to={'/index/detail/' + item.get('id')}>
                                    <h3 className="title">
                                        {item.get('title')}
                                    </h3>

                                </Link>
                                <p className="desc">{item.get('desc')}</p>
                                <div className="toolbar">
                                    <span className="meta">
                                        <i className="iconfont">&#xeaee;</i>
                                        {item.get('writing_words')}
                                    </span>
                                    <span className="nickname">
                                        {item.get('author')}
                                    </span>
                                    <span className="ic-list-comments">
                                        <i className="iconfont">&#xe62e;</i>{item.get('comments')}
                                    </span>
                                    <span className="">
                                        <i className="iconfont">&#xe663;</i>{item.get('like')}
                                    </span>
                                </div>
                            </ListInfo>
                            {item.get('desc_url') ? <img
                                className="list-pic"
                                src={item.get('desc_url')}
                                alt=""
                            /> : ''}

                        </ListItem>
                    );
                })}
                <ListMore onClick={() => getMoreList(articlePage)}>
                    更多内容
                </ListMore>
            </div>
        );
    }
}
const mapState = state => {
    return {
        articleList: state.getIn(['home', 'articleList']),
        articlePage: state.getIn(['home', 'articlePage'])
    };
};
const mapDispatch = dispatch => ({
    getMoreList (articlePage) {
        dispatch(actionCreators.getMoreList(articlePage));
    }
});
export default connect(
    mapState,
    mapDispatch
)(List);
