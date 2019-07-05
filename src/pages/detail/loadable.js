import Loadable from 'react-loadable';
import React from 'react';
// import Loading from './my-loading-component';

const LoadableComponent = Loadable({
    loader: () => import('./'),
    loading() {
        return <div>正在加载</div>;
    }
});
export default () => <LoadableComponent />;
