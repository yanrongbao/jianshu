import React, { PureComponent } from 'react';
import { ListItem, ListInfo, ListMore } from '../style';
import { Link } from 'react-router-dom';
import { requireHomeList } from 'apis/pages/home';
import { fromJS } from 'immutable';
export default class List extends PureComponent {
    componentDidMount () {
        this.getListData(this.state.articlePage)
    }
    state = {
        articlePage: 1,
        articleList: []
    }
    render () {
        const { articleList } = this.state;
        return (
            <div>
                {articleList.map((item, index) => {
                    return (
                        <ListItem key={index}>
                            <ListInfo>
                                <Link to={'/index/detail/' + item.get('id')}>
                                    <h3 className="title">
                                        {item.get('title')}
                                    </h3>

                                </Link>
                                <p className="desc">{item.get('desc')}</p>
                                <div className="toolbar">
                                    <span className="meta">
                                        <i className="iconfont">&#xeaee;</i>
                                        {this.formatterNumber(item.get('writing_words'))}
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
                <ListMore onClick={() => this.getMoreList()}>
                    阅读更多
                </ListMore>
            </div>
        );
    }
    getListData (articlePage) {
        requireHomeList(articlePage).then(resp => {
            this.setState({
                articleList: fromJS(resp.data)
            })
        })
    }
    async getMoreList () {
        await this.setStateAsync({
            articlePage: this.state.articlePage + 1
        })
        requireHomeList(this.state.articlePage).then(resp => {
            this.setState((preState) => ({
                articleList: preState.articleList.concat(fromJS(resp.data))
            }))
        })

    }
    setStateAsync (state) {
        return new Promise((resolve, reject) => {
            try {
                this.setState(state, resolve);
            } catch (error) {
                reject(error);
            }
        })
    }
    formatterNumber (num) {
        if (num.length === 3) {
            return `0.${num.charAt(1)}`
        } else if (num.length < 3) {
            return `0`
        } else {
            return `${num.slice(0, num.length - 3)}.${num.charAt(num.length - 3)}`
        }
    }
}
