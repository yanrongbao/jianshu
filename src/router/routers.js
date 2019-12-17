
import { lazy } from 'react';
const routes = [
    {
        path: '/index',
        component: lazy(() => import('views/pages/layout')),
        exact: false,
        auth: true,
        route: [
            {
                path: '/index/',
                component: lazy(() => import('views/pages/home')),
                exact: true,
                auth: true,
            },
            {
                path: '/index/write',
                component: lazy(() => import('views/pages/write')),
                exact: true,
                auth: true,
            },
            {
                path: '/index/detail/:id',
                component: lazy(() => import('views/pages/detail')),
                exact: true,
                auth: true,
            },
        ]
    },
    {
        path: '/login',
        component: lazy(() => import('views/pages/login')),
        exact: true,
        auth: false,
    },
    {
        path: '/admin',
        component: lazy(() => import('views/admin/layout')),
        exact: false,
        auth: true,
        route: [
            {
                path: '/admin/user',
                component: lazy(() => import('views/admin/user')),
                exact: true,
                auth: true,
            },
        ]
    },
]
export default routes;