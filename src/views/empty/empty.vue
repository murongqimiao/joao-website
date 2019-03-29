<!-- 主文件 -->
<template>
  <div class="empty">
    empty页面生成成功
  </div>
</template>

<script>
import { emptyData } from './data.js'

export default {
  components: {},
  props: {},
  data () {
    return {
      data: emptyData,
    }
  },
  created () {},
  mounted () {
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
.empty {
    width: 100%;
    text-align: center;
    color: aqua;
    font-size: 50px;
    margin-top: 20px;
}
</style>
