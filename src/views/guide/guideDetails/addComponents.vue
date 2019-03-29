<!--   空白组件模板 author by murongqimiao@live.cn  -->
<template>
  <div class="addComponents_content">
    <h3>组件的安装</h3>
    <p v-highlight style="text-align: left">
      <pre>
      <code>
        /** joao check 可以检测本地物料库资源 **/
        /** JOAO update 可以更新本地物料库资源 **/
        在项目根目录里
        1.joao add -c 目标组件名 (或者 joao add -c 组件A 组件B 组件C 一次安装多个组件)
        2.在src/components可以看到你添加的组件
      </code>
      </pre>
      <img src="../../../assets/images/inityourcomponents.gif">
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
.addComponents_content {
    width: 100%;
    text-align: left;
    margin-left: 20px;
    color: rgba(0,0,0,0.5);
    padding-left: 50px;
}
</style>
