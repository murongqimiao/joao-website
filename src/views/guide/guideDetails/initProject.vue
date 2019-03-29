<!--   空白组件模板 author by murongqimiao@live.cn  -->
<template>
  <div class="initProject_content">
    <h3>项目初始化</h3>
    <p v-highlight style="text-align: left">
      <pre>
      <code>
        /** 首先要在私库中下载joao-cli **/
        cd到目标目录
        1.joao init
        2.请为项目命名 ->   输入要生成项目的名称
        3.请选择使用的模板w
          empty-backend-template  // 空白后台模板, vue + elementUI
          whole-backend-template  // 完整后台模板的实例项目, cli使用的物料库存放在此项目中
          empty-mobile-template  // 空白的移动端项目
        4.等待下载完成
      </code>
      </pre>
      <img src="../../../assets/images/inityourproject.gif">
    </p>
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
.initProject_content {
    width: 100%;
    margin-left: 20px;
    text-align: left;
    padding-left: 50px;
    color: rgba(0,0,0,0.5);
}
</style>
