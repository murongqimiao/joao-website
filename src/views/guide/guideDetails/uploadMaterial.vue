<!--   空白组件模板 author by murongqimiao@live.cn  -->
<template>
  <div class="uploadMaterial_content">
    <h3>上传物料</h3>
      <p v-highlight style="text-align: left">
        <pre>
        <code>
          在 <a href="https://git.joao.net/fegroup/joao-management-tpl.git"> https://git.joao.net/fegroup/joao-management-tpl.git</a> 项目中,
          上传自己的物料,在cli中update即可更新到本地.
          material/generate_components/文件下放置组件物料,
          material/generate_modules/文件夹下放置模块物料,
          目录结构, __className__占位符的使用, 参考其他即可
        </code>
        </pre>
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
.uploadMaterial_content {
    width: 100%;
    text-align: left;
    padding-left: 50px;
    margin-left: 20px;
    color: rgba(0,0,0,0.5);
}
</style>
