const fs = require('fs');
const path = require('path');
const appDirectory = path.resolve(__dirname, './../');

/* create-react-app */
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
    appBuild: resolveApp('build'),
    appPublic: resolveApp('public'),
    appHtml: resolveApp('public/index.html'),
    appIndexJs: resolveApp('src/index.tsx'),
    appSrc: resolveApp('src')
};