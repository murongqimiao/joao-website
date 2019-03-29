#### 说明
      项目基于 vue cli 3.0 + TS + webpack4 + elementUI 打造
      webpack私有化属性配置见全局下 vue.config.js

#### 安装依赖

npm i

#### 项目运行

npm run dev

#### 内置axios封装  -> /api/http.js

#### 组件放置 src/components下

#### 页面放置 src/router下 一级路由自动注册

#### vue-x  打碎在src/router下, 由store.js自动注册


#####项目架构
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

###### 执行 npm run dev  其他的自己看package吧