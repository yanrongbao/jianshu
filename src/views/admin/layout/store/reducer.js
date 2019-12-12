import { fromJS } from 'immutable';

const layoutState = fromJS({
    navList: [
        {
            key: '01',
            title: '用户管理',
            type: 'user',
            children: [
                {
                    key: '01_01',
                    title: '用户列表',
                    url: '/admin/user'
                }
            ]
        }
    ],
})

export default (state = layoutState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}