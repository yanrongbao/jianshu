import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TopicWrapper, TopicItem } from '../style'
class Topic extends Component {
    render() {
        const { topicList } = this.props;
        return (
            <TopicWrapper>
                {topicList.map(item =>
                    (
                        <TopicItem>
                            <img key={item.get('title')} className="TopicItem-image" src={item.get('imgUrl')} />
                            {item.get('title')}
                        </TopicItem>
                    )
                )}

            </TopicWrapper>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        topicList: state.get('home').get('topicList')
    }
}
export default connect(mapStateToProps, null)(Topic);