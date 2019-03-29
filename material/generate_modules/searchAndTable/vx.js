import http from '../../api/http'

const __className__ = {
  state: {
    __className___tableDate: [],
    total: 0,
    pageSize: 20,
    pageNum: 1,
    searchContent: {},
    loading: false
  },
  mutations: {
    __className___GET_TABLE_DATE: (state, data) => {
      state.__className___tableDate = data.tableDate
      state.total = data.total
      state.pageSize = data.currentPageSize
      state.page = data.currentPage
      state.loading = false
      console.log(state)
    },
    __className___SET_PAGE_NUM: (state, pageNum) => {
      state.pageNum = pageNum
    },
    __className___SET_PAGE_SIZE: (state, pageSize) => {
      state.pageSize = pageSize
    },
    __className___SET_SEARCH_CONTENT: (state, searchContent) => {
      state.searchContent = searchContent
    },
    __className___LOADING: (state, flag) => {
      const loading = flag || !state.loading
      state.loading = loading
    }
  },
  actions: {
    __className___getTableDate ({ commit, state }) {
      // 假装有数据
      const data = { tableDate: [{ numbers: 1, Name: '小明', id: '1', time: '1995-01-01' }, { numbers: 2, Name: '小红', id: '2', time: '1885-10-01' }], total: 2, currentPageSize: 1, currentPage: 1 }
      commit('__className___LOADING', true)
      setTimeout(() => {
        commit('__className___GET_TABLE_DATE', data)
      }, 1500)
      // 只执行搜索,用vuex内部的pageNum pageSize, searchContent
      // http.get('/example', {
      //   ...state.searchContent,
      //   page: state.pageNum,
      //   pageSize: state.pageSize
      // })
      //   .then(data => {
      //     console.log(data)
      //     commit('__className___GET_TABLE_DATE', data)
      //   })
    },
    __className___setPageNum ({ commit, dispatch }, pageNum) {
      // 改变页数
      commit('__className___SET_PAGE_NUM', pageNum)
      dispatch('__className___getTableDate')
    },
    __className___setPageSize ({ commit, dispatch }, pageSize) {
      // 改变页含
      commit('__className___SET_PAGE_SIZE', pageSize)
      dispatch('__className___getTableDate')
    },
    __className___setSearchContent ({ dispatch, commit }, searchContent) {
      // 改变搜索项
      commit('__className___SET_SEARCH_CONTENT', searchContent)
      dispatch('__className___getTableDate')
    }
  }
}

export default __className__
