import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { WriteWrapper } from '../style';
import { Link } from 'react-router-dom';
import { actionCreators } from '../store';
import { domRotate360deg } from 'utils/dom';

class Writer extends PureComponent {
    render () {
        const { writeList, handlePageChange, writePage, totalWritePage } = this.props;
        return (
            <WriteWrapper>
                <div className="head">
                    <span>推荐作者</span>
                    <span className="change-authors" onClick={() =>
                        handlePageChange(writePage, totalWritePage, this.spinIcon)}>
                        <i
                            ref={icon => {
                                this.spinIcon = icon;
                            }}
                            className="iconfont"
                        >
                            &#xe851;
                            </i>
                        换一批</span>
                </div>
                <ul className="list">
                    {writeList.map((item, index) => {
                        return (
                            <li className="list-item" key={index}>
                                <Link to={'/userDetail'}>
                                    <div className="img-box">
                                        <img alt="" src={item.get('avatar_source')} />
                                    </div>
                                </Link>
                                <div className="info">
                                    <div>
                                        <Link to={'/userDetail'}><span className="name">{item.get('nickname')}</span></Link>
                                        <span className="follow">+关注</span>
                                    </div>
                                    <div>
                                        <span>写了{item.get('total_wordage')}k字</span>
                                        <span>{item.get('total_likes_count')}k喜欢</span>
                                    </div>
                                </div>
                            </li>
                        )
                    })}

                </ul>
            </WriteWrapper>
        );
    }
    componentDidMount () {
        this.props.getWriteList(this.props.writePage);
    }
}
const mapState = (state) => ({
    writeList: state.getIn(['home', 'writeList']),
    writePage: state.getIn(['home', 'writePage']),
    totalWritePage: state.getIn(['home', 'totalWritePage']),
})
const mapDispatch = (dispatch) => ({
    getWriteList (writePage) {
        dispatch(actionCreators.getWriteList(writePage))
    },
    handlePageChange (writePage, totalWritePage, spinIcon) {
        domRotate360deg(spinIcon);
        if (writePage < totalWritePage) {
            dispatch(actionCreators.getWriteList(writePage + 1));
        } else {
            dispatch(actionCreators.getWriteList(1));
        }
    },
})
export default connect(mapState, mapDispatch)(Writer);
