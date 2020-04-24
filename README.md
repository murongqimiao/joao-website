与joao-cli配套的物料仓储   node version  8.4.0

[homePage](http://39.106.169.7:8080/)

===================
![images](https://img.shields.io/badge/elementUI-2.0+-blue.svg)
![images](https://img.shields.io/badge/vue~cli-3.0+-blue.svg)
![images](https://img.shields.io/badge/joao~cli-0.0.2-skyblue.svg)
![images](https://img.shields.io/badge/webpack-4.0+-blue.svg)
![images](https://img.shields.io/badge/build-passing-green.svg)

### future
      最近会更新一批组件, 对应hackerlink官网项目

### joao-cli 运行
```
      // 安装joao-cli
      
      npm install -g joao-cli
      
      // 更新物料
      
      joao update
      
      // 新建空模板项目
      
      joao init
      
      // 在项目中添加组件物料 (generate_components) 多个组件空格隔开
      
      joao add -c 组件A 组件B
      
      // 在项目中添加module物料 (generate_modules)
      
      joao add -p 自定义名称
      
      // 在项目中添加module物料 (多级目录)
      
      joao add -p 父级路径/自定义名称
      
```

### 项目运行

```
      // 安装依赖
      
      `npm i`
      
      // 项目运行
      
      `npm run dev`
      
      // 内置axios封装
      
      `@/api/http.js`
      
      // 组件放置
      
      `src/components`
      
      // 页面放置 一级路由自动注册
      
      `src/views`
      
      // vue-x 打碎在src/views下, 由store.js自动注册
      
      `src/views/store.js`
 ```


------
|src    主要文件    
-----

|-----api   放置接口相关


|-----assets

      |-----  utils 工具类

|-----components

      |-----  XXXXXX   普通组件
      |-----  common   公用组件放置次此文件夹下

|-----model

      |-----   route   路由声明
      |-----   user    用户登录相关
 
|-----router

      |-----   index  此文件自动注册views目录下所有文件下的index.js的路由

|-----views 

      |-----   store  此文件自动注册views下所有一级目录的vx.js
      |-----   XXXXX  页面单位
                |-----       index.js   ······················   抛出路由
                |-----       vx.js      ······················   抛出的vuex
                |-----       XXXX.vue   ······················   page级别的vue文件
                |-----       data.js    ······················   存放json格式的数据

|----- and so on...

### 目录结构


>`src`

>>`api` 放置接口相关

>>`assets`

>>>`utils`  工具类

>>`components`

>>>`XXXXXX`   普通组件

>>>`common`   公用组件放置次此文件夹下

>>`model` 

>>>`route`    路由声明

>>>`user`    用户登录相关

>>`router`

>>>`index `  此文件自动注册views目录下所有文件下的index.js的路由

>>`views` 

>>>`store`  此文件自动注册views下所有一级目录的vx.js

>>>`XXXXX`   页面单位

>>>> `index.js` 抛出路由

>>>>`vx.js` 抛出vuex

>>>>`XXXX.vue` vue主文件

### 沟通联系
`前端工程化实践群793841737`
或者issue 一步到位



