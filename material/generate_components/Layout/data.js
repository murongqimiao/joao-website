// 侧边栏数据
const sidebarData = [{
  navName: '首页',
  path: '/',
  icon: 'el-icon-date'
}, {
  navName: '文档',
  path: '/document',
  icon: 'el-icon-document'
}, {
  navName: '引导页',
  path: '/leading',
  icon: 'el-icon-star-off'
}, {
  navName: '组件',
  path: '/component',
  icon: 'el-icon-news',
  children: [{
    name: '头像上传',
    path: '/avatar-upload'
  }, {
    name: 'think',
    path: '/think'
  }]
}, {
  navName: '图表',
  path: '/graph',
  icon: 'el-icon-edit-outline',
  children: [{
    name: 'table1',
    path: '/table1'
  }, {
    name: 'table2',
    path: '/table2'
  }, {
    name: 'table3',
    path: '/table3'
  }]
}]

// 默认路由集合数据
const routerGather = [{
  navName: '首页',
  canDel: false,
  path: '/'
}]

export { sidebarData, routerGather }