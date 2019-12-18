import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    DropdownUl,
    DropdownLi
} from '../style';
import { actionCreators as loginActionCreators } from 'views/pages/login/store';
class DropdownMenu extends Component {
    render () {
        const { userTipLists, logout } = this.props;
        return (
            <DropdownUl className="dropdown-menu">
                {userTipLists.map((item, index) => {
                    return (
                        <DropdownLi key={index}>
                            <i className={`iconfont ${item.get('iconClass')}`}></i>
                            <span>{item.get('name')}</span>
                        </DropdownLi>
                    )
                })}
                <DropdownLi onClick={() => logout()}>
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
        logout () {
            dispatch(loginActionCreators.logout());
        }
    }
}
export default connect(
    mapStateToProps,
    mapAction
)(DropdownMenu);
