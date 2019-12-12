import React from 'react';
import { GlobalStyle } from './style';
// import 'statics/iconfont/index.styl';
import 'statics/iconfont/index.css';
import { Provider } from 'react-redux';
import store from './store';
import RouterView from 'router/index';
import zhCN from 'antd/es/locale/zh_CN';
import { ConfigProvider } from 'antd';

function App () {
    return (
        <ConfigProvider locale={zhCN}>
            <div className="dell">
                <GlobalStyle />
                {/* <IconStyle /> */}
                <Provider store={store}>
                    <RouterView></RouterView>
                </Provider>
            </div>
        </ConfigProvider>
    );
}

export default App;
