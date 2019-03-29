<!--  弹窗组件 author by murongqimiao@live.cn  -->
<template>
  <div class="WhiteToast_content">
    <slot name="toast"></slot>
  </div>
</template>

<script>
export default {
  /** 使用方法
   * 引用组件后, 元素添加slot="toast", 展示弹窗内容
   */
  props: {
  },
  data () {
    return {
    }
  },
  created () {
  },
  methods: {
  },
}
</script>

<style lang="stylus" scoped>
.WhiteToast_content {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: rgba(0,0,0,.3);
}
</style>
