<!--   空白组件模板 author by murongqimiao@live.cn  -->
<template>
  <div class="downloadWay_content">
    <p>开源版的joao-cli可以在npm公共库中直接安装使用</p>
    <pre v-highlight>
      <code>

        // 安装joao cli

          npm install -g joao-cli 即可完成安装
      </code>
    </pre>
  </div>
</template>

<script>
export default {
  props: {},
  data () {
    return {}
  },
  created () {},
  methods: {}
}
</script>

<style lang="scss">
.downloadWay_content {
    width: 100%;
    text-align: left;
    margin-left: 20px;
    padding-left: 50px;
    color: rgba(0,0,0,0.5);
    p {
      line-height: 30px;
    }
}
</style>
