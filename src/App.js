import React from 'react';
import { GlobalStyle } from './style';
import { IconStyle } from './statics/iconfont/iconfont.js';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './component/header';
import Home from './pages/home';
import Detail from './pages/detail';
import store from './store';

function App() {
    return (
        <div className="dell">
            <GlobalStyle />
            <IconStyle />
            <Provider store={store}>
                <BrowserRouter>
                    <Header />
                    <Route path="/" exact component={Home} />
                    <Route path="/detail/:id" exact component={Detail} />
                </BrowserRouter>
            </Provider>
        </div>
    );
}

export default App;
