
import { lazy } from 'react';
import adminRoutes from './adminRoutes'
const routes = [
    {
        path: '/index',
        component: lazy(() => import('views/pages/layout')),
        exact: false,
        auth: true,
        children: [
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
        children: adminRoutes
    },
]
export default routes;