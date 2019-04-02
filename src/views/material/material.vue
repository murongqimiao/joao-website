<!-- 主文件 -->
<template>
  <div class="material">
    <Nav :active='1'/>
    <!-- 图表 -->
    <div class="groups">
      <h2>{{ `图表  (${data.graph.length})` }}</h2>
      <div class="flex-box">
        <div v-for="(item, i) in data.graph" :key="`group_${i}`" @click="choiceImg(item)">
          <img :src="item.src" alt="">
          <p class="name">{{ item.name }}</p>
          <p class="des" @click.stop="jumpCode(item.code)">查看代码</p>
        </div>
      </div>
    </div>
    <!-- 模块 -->
    <div class="groups">
      <h2>{{ `模块  (${data.modules.length})` }}</h2>
      <div class="flex-box">
        <div v-for="(item, i) in data.modules" :key="`group_${i}`" @click="choiceImg(item)">
          <img :src="item.src" alt="">
          <p class="name">{{ item.name }}</p>
          <p class="des" @click.stop="jumpCode(item.code)">查看代码</p>
        </div>
      </div>
    </div>
    <!-- 其他 -->
    <div class="groups">
      <h2>{{ `其他  (${data.others.length})` }}</h2>
      <div class="flex-box">
        <div v-for="(item, i) in data.others" :key="`group_${i}`" @click="choiceImg(item)">
          <img :src="item.src" alt="">
          <p class="name">{{ item.name }}</p>
          <p class="des" @click.stop="jumpCode(item.code)">查看代码</p>
        </div>
      </div>
    </div>
    <div class="groups"></div>
    <div :class="showDetail ? 'imgToast_hl' : 'imgToast'" @click="() => { this.showDetail = false }">
      <img :src="defaultSrc">
    </div>
    <div class="init-bottom">JOAO @2019</div>
  </div>
</template>

<script>
import { materialData } from './data.js'
import Nav from '@/components/Nav'

export default {
  components: {
    Nav
  },
  props: {},
  data () {
    return {
      data: materialData,
      defaultSrc: '',
      showDetail: false
    }
  },
  created () {},
  mounted () {
  },
  methods: {
    choiceImg (data) {
      let { src } = data
      this.defaultSrc = src
      this.showDetail = true
    },
    jumpCode (url) {
      window.open(url)
      return false
    }
  },
}
</script>

<style lang="scss" scoped>
.material {
    width: 100%;
    text-align: center;
    .groups {
      width: 80%;
      margin-left: 10%;
      margin-top: 40px;
      h2 {
        background: white;
        text-align: left;
        text-indent: 2%;
      }
      .flex-box{
          display: flex;
          flex-wrap: wrap;
        & > div {
          width: 30%;
          height: 160px;
          margin-top: 10px;
          overflow: hidden;
          background: #FFFFFF;
          transition: 0.3s;
          box-shadow: 0 0 1px 2px rgba(0,0,0,.7);
          border-radius: 5px;
          margin:10px;
        }
        & > div:hover {
          transform: scale(1.1);
          transition: 0.3s;
          transform-origin: bottom center;
          cursor: pointer;
          .des {
            width: 100%;
            background: #e6f7ff;
            font-size: 18px;
            opacity: 0.3;
            display: inherit;
            cursor: zoom-in;
            line-height: 25px;
          }
        }
        .name {
          font-size: 20px;
        }
        .des {
          display: none;
        }
      }
      img {
        height: 100px;
      }
    }
    .imgToast {
      width: 100%;
      height: 100%;
      position: fixed;
      top: 0;
      right: 0;
      left: -100%;
      bottom: 0;
      transition: 0.3s;
      background: rgba(0,0,0,0.1);
      img {
        margin-top: 20%;
        max-width: 80%;
      }
    }
    .imgToast_hl {
      width: 100%;
      height: 100%;
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      transition: 0.3s;
      background: rgba(0,0,0,0.1);
      img {
        margin-top: 20%;
        user-select: none;
        max-width: 80%;
      }
    }
}
</style>
