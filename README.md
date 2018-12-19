
### 简述

该项目是一个针对我个人自定义的脚手架, 用来快速生成 beidousat-temp 项目

做这个脚手架只是为了偷懒。因为其它的管理系统都是照着一个模板进行开发，然后为了拒绝`剪切复制`，就有了这个项目

### 安装
```
npm init beidousat-cli -g
```

### 用法
```
sat init 项目名称
cd 项目名称
npm i 或者 yarn
npm run start 或者 yarn start
```
项目就起来了。。。

处理初始化项目之外，还可以简单生成一个组件骨架，只是为了偷懒

生成组件模板
```
sat create 路径/组件名称
```

目前的组件模板只有一个：

  1. simple-component------最简单的组件。这是一个什么都没有，只是一个最简单的骨架。


模板都在`beidousat-temp`这个项目里面，对应的分支是：
  1. simple-component -> component

ps: `beidousat-temp` 的`master`分支是这个项目的模板，其它分支的内容都是依赖这个项目模板的。

现在只是一个最简单且很丑的版本，之后有空会完善这个项目。

模板地址: [beidousat-temp](https://github.com/houjunjie/beidousat-temp)
