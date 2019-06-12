<!--   空白组件模板 author by murongqimiao@live.cn  -->
<template>
  <div class="Recommend-content">
    <div @click="jump(item.cbUrl)" class="Recommend-each" v-for="(item, i) in recommend_content" :key="`recommend-${i}`">
      <span >{{ item.buttonName }}</span>
      <h2>{{ item.name }}</h2>
      <article>{{ item.textContent }}</article>
      <img :src="item.imgSrc">
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  data () {
    return {
      recommend_content: [{
        name: '指南',
        imgSrc: require('../assets/images/undraw_report_mx0a.svg'),
        buttonName: '查看详情',
        cbUrl: '/guide',
        textContent: '了解设计初衷,助力项目上线前的研发流程,快速上手'
      }, {
        name: '物料',
        imgSrc: require('../assets/images/undraw_product_teardown_elol.svg'),
        buttonName: '查看详情',
        cbUrl: '/materials',
        textContent: '体验模块与组件,即查即用,一键搞定'
      }, {
        name: '规范',
        imgSrc: require('../assets/images/undraw_science_fqhl.svg'),
        buttonName: '查看详情',
        cbUrl: '/standard',
        textContent: '查看项目设计思路,组件,模块编写规范.'
      }]
    }
  },
  created () {},
  methods: {
    jump (url) {
      this.$router.push(url)
    }
  }
}
</script>

<style lang="scss" scoped>
.Recommend-content {
    width: 80%;
    text-align: center;
    padding-left: 10%;
    padding-right: 10%;
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    .Recommend-each {
      cursor: pointer;
      width: 30%;
      overflow: hidden;
      width: 25%;
      overflow: hidden;
      height: 400px;
      box-shadow: 0 0 11px #cccccc;
      border-radius: 5px;
      position: relative;
      transition: 1s;
      padding-bottom: 30px;
      &:hover {
        transform: scale(1.05);
        transition: 0.3s;
      }
      & span {
        display: none;
      }
      &:hover > span {
        opacity: 1;
        background: skyblue;
        transform: rotateZ(45deg);
        display: block;
        height: 30px;
        width: 140px;
        transform-origin: 100% 100%;
        margin-top: 65px;
        line-height: 27px;
        cursor: pointer;
        font-size: 16px;
        color: white;
        position: absolute;
        top: 0;
        right: 0;
      }
      h2 {
        margin-top: 40px;
        font-size: 25px;
        opacity: 0.7;
        animation: 0.3s;
        transition: 1s;
      }
      article {
        margin-top: 20px;
        padding-left: 20px;
        padding-right: 20px;
        text-align: center;
        font-size: 16px;
        opacity: 0.4;
      }
      img {
        margin-top: 30px;
        width: 80%;
      }
    }
}
</style>
