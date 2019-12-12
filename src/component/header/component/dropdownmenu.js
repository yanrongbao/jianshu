import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    DropdownUl,
    DropdownLi
} from '../style';
import { actionCreators as loginActionCreators } from 'views/pages/login/store';
class DropdownMenu extends Component {
    render () {
        const { userTipLists, loginOut } = this.props;
        return (
            <DropdownUl className="dropdown-menu">
                {userTipLists.map(item => {
                    return (
                        <DropdownLi>
                            <i className={`iconfont ${item.get('iconClass')}`}></i>
                            <span>{item.get('name')}</span>
                        </DropdownLi>
                    )
                })}
                <DropdownLi onClick={() => loginOut()}>
                    <i className={`iconfont iconai-out`}></i>
                    <span>退出</span>
                </DropdownLi>
            </DropdownUl >
        )
    }
}

const mapStateToProps = state => {
    return {
        userTipLists: state.getIn(['header', 'userTipLists']),
    };
};
const mapAction = dispatch => {
    return {
        loginOut () {
            dispatch(loginActionCreators.loginOut());
        }
    }
}
export default connect(
    mapStateToProps,
    null
)(DropdownMenu);