// 路由拦截
import React, { PureComponent } from 'react';

export default class RouterGuard extends PureComponent {

    componentWillMount () {
        let { location: { pathname }, history: { replace } } = this.props;
        if (pathname === '/login' && localStorage.getItem('TOKEN')) {
            replace('/index');
        }
    }
    render () {
        const { router } = this.props;
        return <router.component routes={router.children} />
    }
}
