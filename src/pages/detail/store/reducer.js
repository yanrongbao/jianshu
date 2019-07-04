import { fromJS } from 'immutable';
import * as types from './actionTypes';
const deatilState = fromJS({
    title: '',
    content: ''
});

export default (state = deatilState, action) => {
    switch (action.type) {
        case types.CHANGE_DETAIL:
            return state.merge({
                title: action.title,
                content: action.content
            });
        default:
            return state;
            break;
    }
};
