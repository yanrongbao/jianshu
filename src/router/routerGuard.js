import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

export default class RouterGuard extends PureComponent {
    constructor(props) {
        super(props)
    }
    componentWillMount () {
        let { location: { pathname }, history: { replace } } = this.props;
        if (pathname === '/login' && localStorage.getItem('TOKEN')) {
            replace('/index');
        }
    }
    render () {
        const { router } = this.props;
        return <router.component routes={router.route} />
    }
}
