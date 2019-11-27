import { createGlobalStyle } from 'styled-components';
export const IconStyle = createGlobalStyle`
@font-face {font-family: "iconfont";
  src: url('iconfont.eot?t=1574847237310'); /* IE9 */
  src: url('iconfont.eot?t=1574847237310#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('iconfont.woff?t=1574847237310') format('woff'),
  url('iconfont.ttf?t=1574847237310') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('iconfont.svg?t=1574847237310#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.iconspin:before {
  content: "\e851";
}

.iconiconfonticonfontsousuo1:before {
  content: "\e62f";
}

.iconaixin:before {
  content: "\e663";
}

.iconAa:before {
  content: "\e636";
}

.iconzhinan:before {
  content: "\e8d0";
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
`;
