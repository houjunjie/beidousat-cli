
// ref: https://umijs.org/config/
export default {
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: true,
      title: '店家系统',
      dll: false,
      pwa: false,
      routes: {
        exclude: [],
      },
      hardSource: false,
    }],
  ],
  history: 'hash',
  proxy: {
    "/v4.0": {
      "target": "http://192.168.1.99:5000/",
      "changeOrigin": true,
      // "pathRewrite": { "^/v4.0" : "" }
    },
    "/zuul": {
      "target": "http://192.168.1.99:5000/",
      "changeOrigin": true,
      // "pathRewrite": { "^/v4.0" : "" }
    },
    "/mock": {
      "target": "https://www.easy-mock.com/",
      "secure":false,
      "changeOrigin": true,
      // "pathRewrite": { "^/mock" : "" }
    }
  },
  publicPath:"/store_admin/dist/",
  hash: true,
  extraBabelPlugins: [
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }],
  ],

}
