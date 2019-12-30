import { lazy } from 'react';
export default [
    {
        path: '/admin/user',
        component: lazy(() => import('views/admin/layout')),
        exact: false,
        auth: true,
        meta: {
            iconClass: 'user',
            name: '用户管理',
        },
        children: [
            {
                path: '/admin/user/list',
                component: lazy(() => import('views/admin/userlist')),
                exact: false,
                auth: true,
                meta: {
                    name: '用户列表',
                    iconClass: ''
                },
            }
        ]
    },
    {
        path: '/admin/writelist',
        component: lazy(() => import('views/admin/writelist')),
        exact: true,
        auth: true,
        meta: {
            name: '文章列表',
            iconClass: 'user'
        }
    },
]