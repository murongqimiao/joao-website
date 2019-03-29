<!--   空白组件模板 author by murongqimiao@live.cn  -->
<template>
  <div class="Nav-content">
    <div class="Nav-content-logo" @click="jump('/')">JOAO Cli</div>
    <div class="Nav-lead-button">
      <p @click="jump('/guide')" :class="active === 0 ? 'hl' : ''">指南</p>
      <p @click="jump('/material')" :class="active === 1 ? 'hl' : ''">物料</p>
      <p @click="jump('/standard')" :class="active === 2 ? 'hl' : ''">规范</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    active: {
      type: Number,
      default: -1
    }
  },
  data () {
    return {}
  },
  methods: {
    jump (url) {
      this.$router.push(url)
    }
  }
}
</script>

<style lang="scss">
.Nav-content {
    width: 80%;
    text-align: center;
    margin-left: 10%;
    height: 80px;
    border-bottom: 1px solid #cccccc;
    .Nav-content-logo {
      font-size: 30px;
      font-weight:600;
      float: left;
      width: 200px;
      line-height: 80px;
      color: cornflowerblue;
      cursor: pointer;
      user-select: none;
    }
    .Nav-lead-button {
      float: right;
      display: flex;
      width: 300px;
      height: 100%;
      justify-content: space-around;
      user-select: none;
      p {
        line-height: 80px;
        font-size: 18px;
        color:#1989fa;
        user-select: none;
        opacity: 0.3;
        &:hover {
          opacity: 0.8;
          cursor: pointer;
        }
      }
      .hl {
        opacity: 0.8;
      }
    }
}
</style>
