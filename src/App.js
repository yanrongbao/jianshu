import React from 'react';
import { GlobalStyle } from './style';
import { IconStyle } from './statics/iconfont/iconfont.js';
import { Provider } from 'react-redux';
import Header from './component/header';
import store from './store';

function App() {
    return (
        <div className="dell">
            <GlobalStyle />
            <IconStyle />
            <Provider store={store}>
                <Header />
            </Provider>
        </div>
    );
}

export default App;
