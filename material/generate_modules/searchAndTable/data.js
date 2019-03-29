/**
 * __className__页面配置项  author:murongqimiao@live.cn
 */

// 顶部搜索配置
export const searchData = {
  data: [
  /** 时间选择器组件 */
    {
      conditionName: 'startTime',
      controlName: '时间选择器',
      controlType: 'timePicker'
    },
    /** 时间区间选择器组件 */
    {
      conditionName: 'timeArea',
      controlName: '区间选择器',
      controlType: 'DoubleTimePicker'
    },
    /** 选择框组件 */
    {
      conditionName: 'ticketType',
      controlName: 'select框',
      controlType: 'select',
      options: [{
        value: 'all',
        label: '全部'
      }, {
        value: 'man',
        label: '点我选男的'
      }, {
        value: 'woman',
        label: '点我选女的'
      }, {
        value: 'mwm',
        label: '点我选不男不女的'
      }]
    },
    /** 输入框组件 */
    {
      conditionName: 'creator',
      controlName: '发放人',
      controlType: 'input'
    }]
}

// 表格表头配置
export const tableData = {
  numbers: ['我是序号', '80', { sortable: true }],
  Name: ['我是名称', '140', {}],
  id: ['我是id', '100', {}],
  time: ['我是时间', '140', {}],
}
