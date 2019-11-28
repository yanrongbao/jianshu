import { fromJS } from 'immutable';
import * as types from './actionTypes';
import JSHY from '../../../statics/jshy.png';
import JSBQ from '../../../statics/jsbq.png';
import YXLZ from '../../../statics/yxlz.png';
import JSDXT from '../../../statics/jsdxt.png';
const homeState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [
        { id: 1, imgUrl: JSHY },
        { id: 2, imgUrl: JSBQ },
        { id: 3, imgUrl: YXLZ },
        { id: 4, imgUrl: JSDXT }
    ],
    articlePage: 1,
    showScroll: false,
    writeList: [],
    writePage: 1,
    totalWritePage: 1,
});
const changeHomeData = (state, action) => {
    return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList)
    });
};
const addHomeList = (state, action) => {
    return state.merge({
        articleList: state.get('articleList').concat(action.list),
        articlePage: action.articlePage
    });
};
const addWriteList = (state, action) => {
    return state.merge({
        writeList: fromJS(action.writeList),
        totalWritePage: action.totalWritePage,
        writePage: action.writePage,
    })
}

export default (state = homeState, action) => {
    switch (action.type) {
        case types.CHANGE_HOME_DATA:
            return changeHomeData(state, action);
        case types.ADD_HOME_LIST:
            return addHomeList(state, action);
        case types.TOGGLE_SCROLL_SHOW:
            return state.set('showScroll', action.show);
        case types.GET_WRITE_LIST:
            return addWriteList(state, action);
        case types.WRITEPAGE_CHANGE:
            return state.set('writePage', action.writePage);
        default:
            return state;
    }
};
