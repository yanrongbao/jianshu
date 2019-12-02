
import { lazy } from 'react';
const routes = [
    {
        path: '/',
        component: lazy(() => import('pages/layout')),
        exact: false,
        route: [
            {
                path: '/',
                component: lazy(() => import('pages/home')),
                exact: true
            },
            {
                path: '/write',
                component: lazy(() => import('pages/write')),
                exact: true
            },
            {
                path: '/detail/:id',
                component: lazy(() => import('pages/detail')),
                exact: true
            },
        ]
    },
    {
        path: '/login',
        component: lazy(() => import('pages/login')),
        exact: true
    },
]
export default routes;