import * as types from './actionsTypes';
import { fromJS } from 'immutable';
const headerState = fromJS({
    focused: false,
    mouseIn: false,
    list: [],
    page: 1,
    totalPage: 1
});

export default (state = headerState, action) => {
    switch (action.type) {
        case types.INPUT_FOCUS_ON:
            return state.set('focused', true);
            break;
        case types.INPUT_FOCUS_OFF:
            return state.set('focused', false);
            break;
        case types.CHANGE_LIST:
            return state.merge({
                list: action.data,
                totalPage: action.totalPage
            });
        // return state
        //     .set('list', action.data)
        //     .set('totalPage', action.totalPage);
        // break;
        case types.MOUSE_ENTER:
            return state.set('mouseIn', true);
            break;
        case types.MOUSE_LEAVE:
            return state.set('mouseIn', false);
            break;

        case types.PAGE_CHANGE:
            return state.set('page', action.page);
            break;
        default:
            return state;
            break;
    }
};
