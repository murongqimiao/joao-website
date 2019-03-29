<!--   路由记录模板 author by murongqimiao@live.cn  -->
<template>
  <div class="TagsView_content" id="TagsView-scroll-content">
    <div  class="TagsView-scroll-content">
      <router-link :class="currentRoute === item.path ? 'tags-route-item tags-route-item-active' : 'tags-route-item'" v-for="(item, i) in routeGather" :key="`route${i}`" :to="item.path">
        {{ item.navName }}
        <i class="el-icon-close" @click="removeGather(currentRoute, $event)" v-if="item.canDel"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
import Router from '@/router/index'
import { routerGather, sidebarData } from './data'

export default {
  props: {},
  data () {
    return {
      routeGather: [],
      currentRoute: '/'
    }
  },
  created () {
    this.initGather()
  },
  mounted () {
    Router.afterEach((p, t) => {
      // 路由跳转后注册到组件
      this.addGather(p)
      this.setCurrentRoute(p.path)
    })
  },
  methods: {
    initGather () {
      // 初始化注册路由
      this.routeGather = routerGather
      this.addGather(this.$route)
      this.setCurrentRoute(this.$route.path)
    },
    checkSidebarData (path) {
      // 检测侧栏边数据
      let flag = false
      sidebarData.map(item => {
        if (path === item.path) {
          flag = true
        }
        item.children && item.children.map(each => {
          if (path === `${item.path}${each.path}`) {
            flag = true
          }
        })
      })
      return flag
    },
    addGather ({ name, path }) {
      if (!this.checkSidebarData(path)) return false // 侧边栏不展示的路由不允许出现在路由组里
      const o = this.routeGather.filter(item => item.path === path)
      if (!o.length) {
        this.routeGather.push({
          navName: name || '名字',
          canDel: true,
          path
        })
      }
    },
    removeGather (_path, e) {
      const o = this.routeGather.filter(item => item.path !== _path)
      if (o.length) {
        this.routeGather = o
      }
      if (_path === this.currentRoute) { // 删除当前路由则跳转最后一个
        this.$router.push({ path: this.routeGather[this.routeGather.length - 1].path })
      }
      e.preventDefault()
    },
    setCurrentRoute (path) {
      this.currentRoute = path
    }
  }
}
</script>

<style lang="scss">
.TagsView_content {
    width: 100%;
    height: 30px;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);
    padding-bottom: 2px;
    overflow-x: scroll;
    text-align: left;
    &::-webkit-scrollbar {
      display: none;
    }
    .TagsView-scroll-content {
      white-space: nowrap;
    }
    .tags-route-item {
      display: inline-block;
      position: relative;
      cursor: pointer;
      height: 26px;
      line-height: 26px;
      border: 1px solid #d8dce5;
      color: #495060;
      background: #fff;
      padding: 0 8px;
      font-size: 12px;
      margin-left: 5px;
      margin-top: 4px;
      box-sizing: border-box;
      i {
        width: 16px;
        height: 16px;
        border-radius: 50%;
        text-align: center;
        &:hover {
          line-height: 16px;
          transition: 0.3s;
          border-radius: 50%;
          background: #cccccc;
          color: white;
        }
      }
    }
    .tags-route-item-active {
      background-color: #42b983;
      color: #fff;
      border-color: #42b983;
      padding-left: 20px;
    }
    .tags-route-item-active::before {
      content: '.';
      font-size: 0;
      width: 8px;
      height: 8px;
      background: white;
      border-radius: 50%;
      position: absolute;
      left: 6px;
      top: 9px;
    }
}
</style>
