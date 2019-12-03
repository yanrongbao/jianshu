import React from 'react';
import { GlobalStyle } from './style';
// import { IconStyle } from './statics/iconfont/iconfont.js';
import 'statics/iconfont/index.styl';
import { Provider } from 'react-redux';
import store from './store';
import RouterView from 'router/index';

function App () {
    return (
        <div className="dell">
            <GlobalStyle />
            {/* <IconStyle /> */}
            <Provider store={store}>
                <RouterView></RouterView>
            </Provider>
        </div>
    );
}

export default App;
