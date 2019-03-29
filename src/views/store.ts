/*
* 此文件读取views下所有一级目录并自动注册index.js
*/
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const requireStore = require.context('./', true, /vx.js/)
const module:any = {}
requireStore.keys().forEach(fileName => {
  module[fileName.split('/')[1]] = requireStore(fileName).default
})
let store = new Vuex.Store({
  modules: module
})
export default store
