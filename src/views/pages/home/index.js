import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
// import Topic from './components/Topic';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import List from './components/List';
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './style';
import { actionCreators } from './store';
class Home extends PureComponent {
    render () {
        const { showScroll } = this.props;
        return (
            <HomeWrapper>
                <HomeLeft>
                    {/* <img
                        className="banner-image"
                        src="https://upload.jianshu.io/admin_banners/web_images/4675/569882aa7e239c755c754c4d170a859eca26f752.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
                        alt=""
                    /> */}
                    {/* <Topic /> */}
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer />
                </HomeRight>
                {showScroll ? (
                    <BackTop onClick={this.handleScrollTop}>顶部</BackTop>
                ) : null}
            </HomeWrapper>
        );
    }
    componentDidMount () {
        this.props.changeHomeData();
        this.bindEvent();
    }
    componentWillUnmount () {
        window.removeEventListener('scroll', this.props.changeScrollTopShow);
    }
    bindEvent () {
        window.addEventListener('scroll', this.props.changeScrollTopShow);
    }
    handleScrollTop = () => {
        window.scrollTo(0, 0);
    };
}
const mapState = state => ({
    showScroll: state.getIn(['home', 'showScroll'])
});
const mapDispatch = dispatch => ({
    changeHomeData (action) {
        dispatch(actionCreators.getHomeInfo());
    },
    changeScrollTopShow () {
        let top = document.documentElement.scrollTop;
        if (top > 400) {
            dispatch(actionCreators.toggleTopShow(true));
        } else {
            dispatch(actionCreators.toggleTopShow(false));
        }
    }
});
export default connect(
    mapState,
    mapDispatch
)(Home);
