<!-- 主文件 -->
<template>
  <div class="guide">
    <Nav :active='0'/>
    <div class="standard-maincontent">
      <div class="main-content-list">
        <ul>
          <li v-for="(item, i) in data.data" :key="`li_${i}`" :class="i === checked ? 'isSel' : ''" @click="choice(i, item.value)">
            {{ item.name }}
          </li>
        </ul>
      </div>
      <div class="text-content">
        <component :is="currentComponents" />
      </div>
    </div>
    <div class="init-bottom">JOAO @2019</div>
  </div>
</template>

<script>
import { guideData } from './data.js'
import Nav from '@/components/Nav'
import addComponents from './guideDetails/addComponents'
import addModules from './guideDetails/addModules'
import downloadWay from './guideDetails/downloadWay'
import initProject from './guideDetails/initProject'
import mainDes from './guideDetails/mainDes'
import uploadMaterial from './guideDetails/uploadMaterial'

export default {
  components: {
    Nav,
    addComponents,
    addModules,
    downloadWay,
    initProject,
    mainDes,
    uploadMaterial
  },
  props: {},
  data () {
    return {
      data: guideData,
      checked: 0,
      currentComponents: 'mainDes'
    }
  },
  created () {},
  mounted () {
  },
  methods: {
    choice (n, v) {
      // 选择某个节点
      this.checked = n
      this.currentComponents = v
      console.log(n, v)
    }
  },
}
</script>

<style lang="scss" scoped>
.guide {
    width: 100%;
    height: 100vh;
    text-align: center;
    position: relative;
    color: #314659;
    h3 {
      color: black;
    }
    h1 {
      color: black;
      font-size: 30px;
      text-align: left;
      margin-left: 10%;
      margin-top: 30px;
    }
    .standard-maincontent {
      width: 80%;
      margin-left: 10%;
      position: relative;
      .main-content-list {
        position: absolute;
        text-align: left;
        left: 0;
        top: 0;
        width: 200px;
        color: rgba(0, 0, 0, 0.5);
        li {
          display: block;
          height: 50px;
          line-height: 50px;
          font-size: 16px;
          color: rgba(0, 0, 0, 0.5);
          cursor: pointer;
          user-select: none;
        }
        .isSel {
          color: #1890ff;
          background: #e6f7ff;
          border-right: 2px solid #1890ff;
        }
      }
      .text-content {
        margin-top: 50px;
        margin-left: 200px;
        min-height: 50vh;
        border-left: 1px solid #ccc;
        font-size: 14px;
        h2 {
          margin-bottom: 20px
        }
        p {
          font-size: 16px;
          padding-left: 20px;
          padding-right: 20px;
          text-indent: 50px;
          text-align: left;
          letter-spacing: 1px;
          line-height: 24px;
          opacity: 0.7;
        }
      }
    }
}
</style>
