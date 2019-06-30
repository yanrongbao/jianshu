import React from 'react';
import { GlobalStyle } from './style';
import { IconStyle } from './statics/iconfont/iconfont.js';
import Header from './component/header'

function App() {
  return (
    <div className="dell">
      <GlobalStyle />
      <IconStyle />
      <Header />
    </div>
  );
}

export default App;
