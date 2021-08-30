# self-job-cli

[![npm version](https://badge.fury.io/js/self-job-cli.svg)](http://badge.fury.io/js/self-job-cli) ![npm download](https://img.shields.io/npm/dt/self-job-cli.svg)

![](https://nodei.co/npm/self-job-cli.png?downloads=true&downloadRank=true&stars=true)

这是一个简单的模板 cli，为了快速生成开发模板

## 模板

暂时提供三种模板

- `vue3-admin-element`：使用 `Vue 3 + vite + element-plus` 构建的基础后台管理模板；项目地址[vue3-admin-element](https://github.com/imondo/vue-template/tree/vue3-admin-element)

- `uni-app-wechat`： `uni-app` 构建基础小程序；项目地址[uni-wechart](https://github.com/imondo/uni-wechart)

- `react-board`：`React H5` 模板，适用移动端，公众号开发；项目地址[react-board](https://github.com/imondo/react-board)

## 使用

```shell
npx self-job-cli create <projectName>

or 

npm self-job-cli -g

self-job-cli create <projectName>
```

或者接入参数

```shell
- self-job-cli create projectName -pc-a
- self-job-cli create projectName --pc-admin
- self-job-cli create projectName -wx-uni
- self-job-cli create projectName --uni-wechat
- self-job-cli create projectName -r-b
- self-job-cli create projectName --react-board
```