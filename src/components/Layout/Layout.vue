<!--   空白组件模板 author by murongqimiao@live.cn  -->
<template>
  <div class="Layout_content">
    <sidebar :isCollapse="isCollapse" class="sidebar-container"/>
    <div :class="isCollapse ? 'main-container-close' : 'main-container'">
      <navbar @setSide="setSide"/>
      <tags-view/>
      <slot/>
    </div>
  </div>
</template>

<script>
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import TagsView from './TagsView'

export default {
  components: {
    Sidebar,
    Navbar,
    TagsView
  },
  props: {},
  data () {
    return {
      isCollapse: false // 侧边栏收缩状态
    }
  },
  created () {},
  methods: {
    setSide (isCollapse) {
      this.isCollapse = isCollapse
    }
  }
}
</script>

<style lang="scss">
.Layout_content {
    width: 100%;
    height: 100%;
    text-align: center;
    position: relative;
    .main-container {
      min-height: 100%;
      transition: margin-left .28s;
      margin-left: 180px;
      position: relative;
    }
    .main-container-close {
      min-height: 100%;
      transition: margin-left .28s;
      margin-left: 50px;
      position: relative;
    }
}
</style>
