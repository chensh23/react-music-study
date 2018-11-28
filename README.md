# react-music-study

```
webpack4零配置的概念适用于：

entry point(入口点) 默认为 ./src/index1.js
output(输出) 默认为 ./dist/main.js
production(生产) 和 development(开发) 模式 （无需为生产和开发环境创建2个单独的配置）
在项目文件夹（根目录）创建.babelrc的文件来配置Babel:

.babelrc
{
    "presets": [
        "env"
    ]
}


为 React 项目配置 webpack 4
安装React
yarn add react react-dom --save-dev
接下来添加 babel-preset-react:
yarn add babel-preset-react --save-dev
在.babelrc中配置预设：
{
  "presets": ["env", "react"]
}
还可以配置 babel-loader 来读取 .jsx 文件
```
