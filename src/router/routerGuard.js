import React, { PureComponent } from 'react';
import { connect } from 'react-redux'

export default class RouterGuard extends PureComponent {
    constructor(props) {
        super(props)
    }
    componentWillMount () {
        let { history: { replace } } = this.props
        console.log(this.props)
        // if (a) {
        //     replace('/index')
        // }
    }
    render () {
        const { router } = this.props;
        return <router.component routes={router.route} />
    }
}
