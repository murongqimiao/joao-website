<!--   空白组件模板 author by murongqimiao@live.cn  -->
<template>
  <div class="downloadWay_content">
    <p>出于安全性考虑,企业内容无法开源到npm公共库,因此发布在公司私库中</p>
    <pre v-highlight>
      <code>
        // 进入根目录

          cd ~/

        // 创建.npmrc 如果有请跳过

          touch .npmrc

        // 打开.npmrc

          vim .npmrc

        // 把私库信息复制进去
       
        // 保存即可生效

          添加私库后 npm install会先走私库寻求资源

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
