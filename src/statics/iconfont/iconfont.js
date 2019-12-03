import { createGlobalStyle } from 'styled-components';
export const IconStyle = createGlobalStyle`
@font-face {font-family: "iconfont";
  src: url('iconfont.eot?t=1575339988127'); /* IE9 */
  src: url('iconfont.eot?t=1575339988127#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('iconfont.woff?t=1575339988127') format('woff'),
  url('iconfont.ttf?t=1575339988127') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('iconfont.svg?t=1575339988127#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.iconchenggong:before {
  content: "\e602";
}

.iconicon:before {
  content: "\e601";
}

.iconspin:before {
  content: "\e851";
}

.iconiconfonticonfontsousuo1:before {
  content: "\e62f";
}

.iconLC_icon_user_fill_1:before {
  content: "\e612";
}

.iconshoujihao:before {
  content: "\e6c1";
}

.iconaixin:before {
  content: "\e663";
}

.iconweibo:before {
  content: "\e63d";
}

.iconweixin:before {
  content: "\e659";
}

.iconAa:before {
  content: "\e636";
}

.iconjinggao:before {
  content: "\e6b6";
}

.iconzhinan:before {
  content: "\e8d0";
}

.iconcuowu-tianchong:before {
  content: "\e613";
}

.iconicon-checkin:before {
  content: "\e615";
}

.iconguanzhu:before {
  content: "\e655";
}

.iconzuanshi:before {
  content: "\eaee";
}

.iconpassword:before {
  content: "\e600";
}

.iconbelow-s:before {
  content: "\e627";
}

.icondibudaohanglan-:before {
  content: "\e62e";
}

.iconlingdang:before {
  content: "\e634";
}

.iconchangyongicon-:before {
  content: "\e614";
}

.icongantanhao:before {
  content: "\e710";
}
`;
