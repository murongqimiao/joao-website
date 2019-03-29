<!--   空白组件模板 author by murongqimiao@live.cn  -->
<template>
  <div class="addModules_content">
    <h3>模块的安装</h3>
    <p v-highlight style="text-align: left">
      <pre>
      <code>
        /** joao check 可以检测本地物料库资源 **/
        /** joao update 可以更新本地物料库资源 **/
        在项目根目录里
        1.joao add -p 你想创建的模块(页面)的名称
        2.选择使用的模块
        3.cd src/views 可以看到你添加的内容 模块自动注册路由, 路由名和文件名一致
        4.模块依赖的组件不会自动安装, 需要自行安装
        // 高阶用法
        joao add -p 一级目录名/二级目录名 可以安装二级目录(路由请自行修改) src/一级目录名/二级目录名
      </code>
      </pre>
      <img src="../../../assets/images/inityourmodules.gif">
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
.addModules_content {
    width: 100%;
    text-align: left;
    margin-left: 20px;
    color: rgba(0,0,0,0.5);
    padding-left: 50px;
}
</style>
