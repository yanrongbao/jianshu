import * as types from './actionsTypes';
import { fromJS } from 'immutable';

//immutable 对象
const headerState = fromJS({
    focused: false,
    mouseIn: false,
    list: [],
    page: 1,
    totalPage: 1,
    userTipLists: [
        {
            iconClass: 'iconren',
            name: '我的主页',
            url: ''
        },
        {
            iconClass: 'iconicon_favorite',
            name: '收藏的文章',
            url: ''
        },
        {
            iconClass: 'iconshoucang',
            name: '喜欢的文章',
            url: ''
        },
        {
            iconClass: 'iconrmb',
            name: '已购的内容',
            url: ''
        },
        {
            iconClass: 'icon20',
            name: '我的钱包',
            url: ''
        },
        {
            iconClass: 'iconshezhi',
            name: '设置',
            url: ''
        },
        {
            iconClass: 'iconmessage-fill',
            name: '帮助与反馈',
            url: ''
        }
    ]
});

export default (state = headerState, action) => {
    switch (action.type) {
        case types.INPUT_FOCUS_ON:
            return state.set('focused', true);
        case types.INPUT_FOCUS_OFF:
            return state.set('focused', false);
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
        case types.MOUSE_LEAVE:
            return state.set('mouseIn', false);

        case types.PAGE_CHANGE:
            return state.set('page', action.page);
        default:
            return state;
    }
};
