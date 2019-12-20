import { lazy } from 'react';
export default [
    {
        path: '/admin/user/',
        component: lazy(() => import('views/admin/user')),
        exact: true,
        auth: true,
        children: [
            {
                path: '/admin/user/list',
                component: lazy(() => import('views/admin/user')),
                exact: true,
                auth: true,
            }
        ]
    },
    {
        path: '/admin/list',
        component: lazy(() => import('views/admin/list')),
        exact: true,
        auth: true,
    },
]