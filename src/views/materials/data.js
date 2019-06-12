/**
 * 这里放置json 数据撑起组件内容
 */
export const materialData = {
  // 图表
  graph: [{
    name: '折线图',
    src: require('@/assets/images/lineChart.png'),
    des: 'joao add -c LineChart',
    code: 'https://github.com/murongqimiao/joao-website/blob/master/material/generate_components/LineChart.vue'
  }, {
    name: '柱状图',
    src: require('@/assets/images/barChart.png'),
    des: 'joao add -c BarChart',
    code: 'https://github.com/murongqimiao/joao-website/blob/master/material/generate_components/BarChart.vue'
  }, {
    name: '饼图',
    src: require('@/assets/images/pieChart.png'),
    des: 'joao add -c LineChart',
    code: 'https://github.com/murongqimiao/joao-website/blob/master/material/generate_components/PieChart.vue'

  }, {
    name: '六维图',
    src: require('@/assets/images/raddarChart.png'),
    des: 'joao add -c RaddarChart',
    code: 'https://github.com/murongqimiao/joao-website/blob/master/material/generate_components/RaddarChart.vue'
  }],
  // 模块
  modules: [{
    name: '搜索模块带表格',
    src: require('@/assets/images/searchTable.png'),
    des: 'joao add -p searchAndTable',
    code: 'https://github.com/murongqimiao/joao-website/tree/master/material/generate_modules/searchAndTable'
  }, {
    name: '登录页',
    src: require('@/assets/images/loginPage.png'),
    des: 'joao add -p login',
    code: 'https://github.com/murongqimiao/joao-website/tree/master/material/generate_modules/login'
  }, {
    name: '基础布局',
    src: require('@/assets/images/Layout.png'),
    des: 'joao add -c Layout',
    code: 'https://github.com/murongqimiao/joao-website/tree/master/material/generate_components/Layout'
  }],
  // 其他
  others: []
}
