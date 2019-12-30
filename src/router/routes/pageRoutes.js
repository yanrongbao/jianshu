import { lazy } from 'react';
export default [
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