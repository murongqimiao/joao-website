/**
 * 这里放置json 数据撑起组件内容
 */
export const standardData = {
  data: [{
    name: '整体介绍',
    p: ['Vue版CLI auto内置axios的二次封装,vue router自动注册, vuex 自动注册, User.ts做登录管控。', '点击左侧内容浏览对应内容。'],
  }, {
    name: 'axios',
    p: ['http.js文件中对axios二次封装。', '可根据业务需求修改,如权限分割,处理登录过期,重定向等'],
  }, {
    name: 'vue router',
    p: ['内置vue-router,并做自动注册处理。', 'views文件夹下所有的一级目录中的index.js会自动注册到路由中, 路由名称可作为第三个参数传入。', '二级目录的路由建议也集中到一级文件夹中抛出,比如二级目录的index.js文件抛出new router,由一级目录的index.js接收 import newRouter from ./emample/index.js, 再export [...newRouters]', '这样可以由目录结构看到路由结构,一目了然利于处理'],
  }, {
    name: 'vuex',
    p: ['vuex的设计思路是打碎到模块结构中,利于组件的完整性,使模块/页面独立,可借助cli进行快速复用'],
  }, {
    name: '登录管控',
    p: ['内置User.ts完成登录管控,User 实例化后', 'user.save() 用以添加登录信息到缓存', 'user.load() 用以获取用户信息', ' user.hasToken用以判断登录状态', ' user.clear()用以清除登录信息'],
  }, {
    name: '模块规范',
    p: ['每个模块/页面由4部分组成.',
      'index.js用来抛出路由',
      'data.js内置json格式的数据,用来配置组件的私有化内容',
      'xxx.vue对应目录名是主vue文件', 'vx.js存放对应的vuex的文件',
      '需要注意的是命名规范,为了方便cli自动工具的处理,文件名,主vue项目名,vuex模块的名字,跟路由的path都是一一对应的',
      '组件应当是独立个体,数据流向只能由逻辑层产生,比如在逻辑层调用后端接口获取数据源,传入组件中做对应的处理,严格遵循由模块到组件的数据流向,组件只做数据加工'],
    imgSrc: require('@/assets/images/pages.png')
  }, {
    name: '组件规范',
    p: ['1.组件自己不直接产生数据,只接收(继承)父级(module或者components)传递而来的数据',
      '2.组件用.sync或者触发通用回调(触发的事件放入参数中)来实现数据的处理'],
    imgSrc: require('@/assets/images/components.png')
  }]
}
