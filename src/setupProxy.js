const proxy = require('http-proxy-middleware');
module.exports = function (app) {
    app.use(proxy('/apis', {
        target: 'http://192.168.101.118:5000/',
        secure: false,
        changeOrigin: true,
        pathRewrite: {
            "^/apis": "/"
        },
    }));
};