import { fromJS } from 'immutable';
const homeState = fromJS({
    topicList: [
        {
            id: 1, title: '社会热点', imgUrl: 'https://upload.jianshu.io/admin_banners/web_images/4676/973faa095266d5335fd5a072e6cfc14dcaf08493.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
        },
        {
            id: 2, title: '手绘', imgUrl: 'https://upload-images.jianshu.io/upload_images/16014060-94b2e8fa4bb44196.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        },

    ]
});

export default (state = homeState, action) => {
    switch (action.type) {

        default:
            return state;
            break;
    }
};
