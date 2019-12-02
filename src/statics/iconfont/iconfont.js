import { createGlobalStyle } from 'styled-components';
export const IconStyle = createGlobalStyle`
@font-face {font-family: "iconfont";
  src: url('iconfont.eot?t=1575276779916'); /* IE9 */
  src: url('iconfont.eot?t=1575276779916#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAxEAAsAAAAAFUQAAAv1AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCFTgqZPJR3ATYCJANMCygABCAFhG0HgX4bDRIjEWZcFUn21we2MfOlOxeEgC50pfRThGbaZX4sR/NEXyPHG/vjAqVTgHWzOBSX3PfBw/+4977nDw1w2lm3I5kW16jU3BfKFqISFJf/8HTqv3cXtHfxD0plaiYXHHhYmqHwhMy5bE7+d1Aymdx2ZjCYPwkQQJDmgOj30/kitjIskXbs9k0mXfMu5IDrJ1ywWhMMANhFgOG1pKMGrv53LbNAoDAlFLK14mdnC5nJQsopISlUVRWyr0IhzWwPcsiOngehzkh9RrIpn5pFFA8s10HdHgwBBClQR7Q9943h0VBZYNA6Lc3gM/noGm+BN1rPtRpxicHLI/kYABfm74uf0CMvkBgFPXdosX2epnfw/DVaMuOqkK3mONC/CRRQBzSId2/ZG0AdqTNK0NeTxT0oYm9Kwzv0k4kWq5c+BiOp5Tj0dOwXn7/2JHkHtdbSTHWbP8IERUqsyzKqKIPoQdKWIkSMOEVCAEcYj+3/hycJEgFhoUpYGT4z7Sl4B4IRnVIIGUMlkE4ulUIKpTIwQqDRYMRAu4ERB40FQ4H2AiMB2geMAOhgMBwoCUYYVA2GB80Bw4IeQgIMfI5lSEMvghPkktajlAhUSSUtFaC11+8fs7JG3E5xgVyM1RgEDnujEckUd7ELGzS2Xizm8MJBpXNEbK9AXObvz8eCGXxfb+9Uvr/36XgMT6BiWUMlKLXSKUyKRMTz8+OFlfrKZPzvRQQaziUul9y9SepyRTQ5CEs7aXIQJidtdna1nAWmQ6TZHYtvdCrcR+T689LNbuh0y7VEhxM4HAQkSOh203oXRaV7Mc6x9H7XaASYybRIyaEZI+5yUWPudGYnoAiJEperABe5XZTD4XTm6sEivR7AxSXM2aTj56HDQQIGAlOQiBwycImgod2HU9oRKWw+4M8t20+YGYOewsk5UsyiX9Rk09uNrUwLzS3CeAYbZOvtON/YCpYYHKptLqy9no96m42K3U9GeBffmNRQIgVmM251xh9ySE1mGW5tVlhdFIFbrQqre8g+g9RkAoCpDTmmbK3JzcQnDK110m53WJ2LIBp2lW1u21m6IWK8waK3Gs2MCcuxuke5HJjb1ctxd+cskE9wuCiXm3Y7SaeD0Bplrl3FVQeNJCqAdSB9isTL9hKjGtecGLagkDDshHH2n04jjcPTI41+YQfc2X4jbr+BEKN4BDYVV2dYgrAKnwlZbbgRAAxiBzHDeainaT1mGETuaAFMK248AqEG30iCNSjDDWYArKGMbTzD8VX1AIzJYIH73Vh0pKzIHlOsZilh4gIWBW1VEPQ4mi6IpfV6jLKYACHNJUsilPqG035yTZl/gYIut+/eGUnudXZZYmmSU5SMYWiQEoSppERJ6pHmRiuky+UUva9raLI0Mt/iS1IWw3/zktJGHGRWGJvL5Rm0PdPYlqz34qoSEyND97kYSRM0T43UYAROkzjFM6PV+Rq+egkG6w9UfSjA4DqPnFC139AewGyM3GmNRjuEzZtzkBpHkuC4Kwytd6cKjzkvJb5FmXc+vIEC+7YsQ1RTlX84tutyELv6Sl/xzkuBrIqLvXhEw+KGFsDacwRf7x642ayg+Q2NYuttUaLpAss+k4V7M5/g7b9V+cl5tAHDDE1l5Yo2d3C9W86BOhmdDwwYZ2ils7+5tKQBm2HE+Ra/bVSdC8KTPQIwjhCHqiQrozvCfUDlJeOVYMcdjsnnNbHsC1l6phwsr75ivBRoatE2tgLkkleNscvt0TS242IAi2+8AlH95czGVl8WBpzovBcaLgKksqM3n111eRLEGn3PbFWK8gFjforHDZuiYqX9CpXfeK7u31+AaQ7ls9NUntchGTdUPiOlEAlOfhF3XUX8mgPGTJffD7o/TT5mDviVpHoe96NcK5paKJsxFPxoV6tvxc6NR9bu2LEWidPR34rrYP38qUOTWPtjRWalJ0gUPHsDZa9uuLv/fQStO3+hAqljn7qClKPWi+fK0Aq0MGx63Wpk23Z0LQM1bDW6Bt21HVkLwP7AY4jM/Z3tGPu7DgHAzHZkXlMXhoOoanDUCxcjmwtMm/xRsraWRDf4F/4DbWIU8S0ozX3HIUBuLJBAFKhQBtT0xBisZ42pNgTdDaLVW0DmXYtFH/TDAZUthu36okoIhAeREnT9zyttdtzDh+emTUO1f4NJvtdmdZ8+TjBuuoaYgUn5193v360pA43CRN5bXIB7eNlL8GMj0Glh+IWDvC2xeApSOSg575Fk1iluODKONSnFidi9uV6tXiHjkr1WiRVFs6wj4/lpmrUn8vrFY5FtupYEjHOgX+pr0Yo+b0T9z+GvFa/lQgzHqgs7jZbG+f/dmRU9MmVw5kRv0Xf+Itbsx5aNCPtXjyzobC/1WqX+/dAZ/NoRvDRO+ur5M8TJGwa2gaJ7v83c99cq5G/0YAu6HCTHLVjHTx8HE3omR+1IBMLlocgCW0XXXJE2YiFqtB8JicLYb6HbBylq/GMJXAoRhBQhxeCuSlgzrQOm7n7fJ+u/WRJtJDEesb8SOJifeikm6VKewJOd6CoeMppEErKLhrhZP4bMnXesXyxkx3ebqaSK+JPw4XEDHk6m553xlf3wi3wXGQQY01DvNkmb91DMfPKkGUsBAFvCzN7uc8kdrLdvydwdPYyc5CRzV3nSyp6KxU/LrNrJB22zSsEvXtUs5ICxVwZE4LpRQAR7n+E33yd31m9Pv1E+e1fAEoUPLt/u9zS9Z0btl+L5vmtHpshGJYMB714MjN36OXLac80IvxEaDRORrbEDi+CO3cJCr83i796iQtntLTs/RNQGDCh+xMyN4wFpFbdlSo/7DfJVNxeujv9Huur6QqLVXCOYZPHvDHfsi9h9CaMKC/MltyQLaEoWWBX5hYUUSNStSqw0Vw7UrdQtTRPDsgh+qq6Kp5PN5BgdGIFhZG2rboHNy8bPB6rLgXM7dx6oy2TncvquDeuc6gb/+rNxCWSgwAkdyAX2BDtQJPhmiMkQUpzhm9BjuwHGJQA/IE0Q+4PehzV77iX01WhuRtzEQ/VNAL6DZCODjid9W1GjxQIwbU0/I7D+0ho/3vZhmXcUAYpbiqNh85TTUPGV1Tf/KEmbfXyFpZl9bm5YUdMma8dX4O2yto7SC3ibvA1XtTfWlY8u5uIQbJPdBG/HKoM68bpSq81lsZmbtnBT2V7KvNGj85SzOejXpczrx/VK27JJlbnevJrqymtJHjDqdCWzVZTg8hrNRaF6wQI1nADJsyETUC/uqOPixFom6EoS1GhgkrBnUE8hJ2lUEsd1g0kaDetKr4cQ9/gk8fz54QJvLaH1FoSD5zaRVvJCIs53SZDSkGZlyxjAHgzCxeEvopYxypBSpFSqJKKFruxJUY+KwWyQuhxQw1apuUyMCUzxvA0Az+Vs6EQT9sFpNClMh/6BMr6MuB5fHEC9Aa1DTyO/cNA9dDAAHo+DKIjCnNnRzmF6anRZ27n2oL1CyhjE3gRmUjbvH2QVbUcAdOAqyxrRbr6KOMT1xXYc+LB6XNoU4aBPXvhv3Y7r2LsXps6jU9BMhUe+g1K+xvSBy/QsmxakPll6ITUckWoT1yKBIFsDX2FVKV5Wb0gP1n+DGtITJHHkI4WnzFrb1yFDiAZk8TSiILU6bw6RagOF0AGgxl6EBHFXSBLlASningAA+2dkyPCHLPFQFGQ91aVKXFR08BAQEnaiXQqS7BQvSgd28BfqbCGks03oH4ZIjWJU1vnOF3QYmrggzvQ4JSVU4F48Rw+H1rIYAk9RptKkNEyqSvkuLCX3awcSBQgkFbsjtJbpicQctX1yUPjzX5CWWSDUzDpN/wcFEe1dGCnVAdYviguadVNGRjPaWCJcEWJiwHrCM+HIsjYmDP6jppCUlMwSLYOJiqymQpVy9Yb+/Fc4++akby+1DUlWVE03TMt2XI+38y667MrWSdnjVhzI3R67wyLnmHl0+fnQRG+iyRFDo8jaZrQfDecpGeBtoAW57TlSyzsKpw7buIOdlSEH7mgZDYU0KP/J7eoMbmXy7sq8hmhob4AY5xy63RYtz4t42lGbO2ADTltAjz1LTnedvBOZNy9ZSE3lra0BAAA=') format('woff2'),
  url('iconfont.woff?t=1575276779916') format('woff'),
  url('iconfont.ttf?t=1575276779916') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('iconfont.svg?t=1575276779916#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
`;
