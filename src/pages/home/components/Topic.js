import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { TopicWrapper, TopicItem } from '../style';
class Topic extends PureComponent {
    render () {
        const { topicList } = this.props;
        return (
            <TopicWrapper>
                {topicList.map(item => (
                    <TopicItem key={item.get('title')}>
                        <img
                            className="TopicItem-image"
                            src={item.get('imgUrl')}
                            alt=""
                        />
                        {item.get('title')}
                    </TopicItem>
                ))}
            </TopicWrapper>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        topicList: state.getIn(['home', 'topicList'])
    };
};
export default connect(
    mapStateToProps,
    null
)(Topic);
