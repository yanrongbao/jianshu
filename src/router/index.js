import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import routes from './routes';//路由配置文件
import RouterGuard from './views/routerGuard';//路由守卫文件
export default () => (
    <Router>
        {
            routes.map((router, i) => {
                return <Suspense key={i} fallback={<div>Loading</div>}>
                    <Route exact={router.exact} path={router.path} render={props => (
                        <RouterGuard {...props} router={router} />
                    )} />
                </Suspense>
            })
        }
    </Router>
)

