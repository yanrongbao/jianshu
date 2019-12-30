
import { lazy } from 'react';
import {
    adminRoutes,
    pageRoutes
} from './routes';
const routes = [
    {
        path: '/index',
        component: lazy(() => import('views/pages/layout')),
        exact: false,
        auth: true,
        children: pageRoutes,
        meta: {
            name: '简书首页',
            iconClass: ''
        }
    },
    {
        path: '/login',
        component: lazy(() => import('views/pages/login')),
        exact: true,
        auth: false,
        meta: {
            name: '登录',
            iconClass: ''
        }
    },
    ...adminRoutes
    // {
    //     path: '/admin',
    //     component: lazy(() => import('views/admin/layout')),
    //     exact: false,
    //     auth: true,
    //     children: adminRoutes,
    //     meta: {
    //         name: '简书后台首页',
    //         iconClass: ''
    //     }
    // },
]
export default routes;