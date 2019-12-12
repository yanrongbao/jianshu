
import { lazy } from 'react';
const routes = [
    {
        path: '/index',
        component: lazy(() => import('views/pages/layout')),
        exact: false,
        route: [
            {
                path: '/index/',
                component: lazy(() => import('views/pages/home')),
                exact: true
            },
            {
                path: '/index/write',
                component: lazy(() => import('views/pages/write')),
                exact: true
            },
            {
                path: '/index/detail/:id',
                component: lazy(() => import('views/pages/detail')),
                exact: true
            },
        ]
    },
    {
        path: '/login',
        component: lazy(() => import('views/pages/login')),
        exact: true
    },
    {
        path: '/admin',
        component: lazy(() => import('views/admin/layout')),
        exact: false,
        route: [
            {
                path: '/admin/user',
                component: lazy(() => import('views/admin/user')),
                exact: true
            },
        ]
    },
]
export default routes;