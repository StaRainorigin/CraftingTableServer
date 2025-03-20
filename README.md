# 环境信息
## 版本信息
node: 22

vitepress: 1.6.3

yarn

## 安装 Nodejs
选择: using `fnm` with `yarn`

https://nodejs.org/zh-cn/download

windows 可自行下载安装包

## 安装依赖

``` shell
yarn install
```

## 运行
本地:
``` shell
yarn run docs:dev
```


# 编写文档

## 编辑首页
对应文件: `./docs/.vitepress/index.md`

可本地运行后, 自行对应内容所对应源码位置后进行修改

## 添加文档

1. 在 文档目录 `./docs` 中创建 markdown 文件, 编写内容

2. 打开 `./docs/.vitepress/config.mts`, 找到 `themeConfig` 中的 `sidebar` 处, 添加你所写的文档
