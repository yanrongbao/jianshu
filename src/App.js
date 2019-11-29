import React from 'react';
import { GlobalStyle } from './style';
import { IconStyle } from './statics/iconfont/iconfont.js';
import { Provider } from 'react-redux';
import store from './store';
import RouteView from 'router/index';

function App () {
    return (
        <div className="dell">
            <GlobalStyle />
            <IconStyle />
            <Provider store={store}>
                <RouteView></RouteView>
            </Provider>
        </div>
    );
}

export default App;
