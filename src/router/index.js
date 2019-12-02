import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import routes from './routers';
export default () => (
    <Router>
        {
            routes.map((router, i) => {
                if (router.exact) {
                    return <Suspense key={i} fallback={<div>Loading</div>}>
                        <Route exact path={router.path} render={props => (
                            <router.component {...props} routes={router.route} />
                        )} />
                    </Suspense>
                } else {
                    return <Suspense key={i} fallback={<div>Loading11</div>}>
                        <Route path={router.path} render={props => (
                            <router.component {...props} routes={router.route} />
                        )} />
                    </Suspense>
                }
            })
        }
    </Router>
)