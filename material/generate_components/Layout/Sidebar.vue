<!--   侧栏模板 author by murongqimiao@live.cn  -->
<template>
  <div :class="isCollapse ?'Sidebar_content Sidebar_content_close' : 'Sidebar_content'">
    <el-menu
      default-active="2"
      class="el-menu-vertical"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      background-color="#304156"
      text-color="#BFCBD9"
      active-text-color="#409EFF">
      <div v-for="(item, i) in sidebarData" :key="`sider${i}`">
        <!-- 具有children的可以展开 -->
        <el-submenu :show-timeout=300 :hide-timeout=300 v-if="item.children" :index="`${i + 1}`">
          <template slot="title">
            <i :class="item.icon"></i>
            <span>{{ item.navName }}</span>
          </template>
            <el-menu-item @click="jump(`${item.path}${each.path}`)" v-for="(each, index) in item.children" :key="`child_${index}`" :index="`${i + 1}-${index + 1}`">{{ each.name }}</el-menu-item>
        </el-submenu>
        <!-- 没有children的不可以展开 -->
          <el-menu-item v-if="!item.children" @click="jump(item.path)" :index="`${i+1}`">
            <i :class="item.icon"></i>
            <span slot="title">{{ item.navName }}</span>
          </el-menu-item>
      </div>

    </el-menu>
  </div>
</template>

<script>
import { sidebarData } from './data.js'
export default {
  props: {
    isCollapse: {
      type: Boolean,
      default: () => false
    }
  },
  data () {
    return {
      sidebarData: sidebarData
    }
  },
  created () {
  },
  mounted () {
  },
  methods: {
    handleOpen () {
      console.log('oepn')
    },
    handleClose () {
      console.log('close')
    },
    jump (url) {
      if (!url) return false
      this.$router.push(url)
    }
  }
}
</script>

<style lang="scss">
.Sidebar_content {
    width: 100%;
    text-align: center;
    color: aqua;
    font-size: 50px;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    overflow: hidden;
    width: 180px;
    background-color: #1f2d3d;
    .el-menu {
      border-right: none !important;
      text-align: left;
      .el-menu-item > i, .el-submenu__title > i, .el-tooltip > i {
        margin-right: 10px;
        transform: translateX(-5px);
      }
    }
    .el-menu > .el-menu-item {
      background: #1f2d3d !important;
      &:hover {
        background: #001528 !important;
      }
    }
}
.Sidebar_content_close {
  width: 50px;
}
</style>
