const CracoLessPlugin = require('craco-less');
const path = require('path')
module.exports = {
    plugins: [
      {
        plugin: CracoLessPlugin,
        options: {
          lessLoaderOptions: {
            lessOptions: {
              modifyVars: { '@primary-color': '#1DA57A' },
              javascriptEnabled: true,
              rootpath: path.resolve(__dirname, './src/style')
            },
          },
        },
      },
    ],
  };