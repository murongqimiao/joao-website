<template>
  <div id="app">
    <div v-if="checkRoute()">
        <Nav></Nav>
        <div class="init-contain">
          <h1 class="title">整站快速开发工具</h1>
          <div class="title-suffix">JOAO Cli, 工程化生成前端项目的现代前端开发范本.</div>
          <div class="home-svg-content" @mousemove="bgMove($event)">
            <img class="svg-content-main" src="@/assets/images/undraw_data_trends_b0wg.svg">
          </div>
        </div>
        <Recommend/>
        <div class="init-bottom">JOAO @2019</div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import User from 'model/User'
import Nav from '@/components/Nav'
import Recommend from '@/components/Recommend'
export default {
  components: {
    Nav,
    Recommend
  },
  name: 'App',
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
    checkRoute () {
      return this.$route.path.length < 2
    },
    bgMove (e) {
    }
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
body {
  margin: 0;
  padding: 0;
}
#app {
  .ads {
    position: absolute;
    text-align: center;
    line-height: 200px;
    font-size: 20px;
    writing-mode: vertical-rl;
    width: 200px;
    height: 200px;
    background: #fff;
    box-shadow: 0 0 17px 2px #111;
    background-color: white;
  }
  .init-contain {
    text-align: center;
    width: 100%;
  }
  .title {
    padding-top: 20px;
    font-size: 34px;
    margin: 0;
    line-height: 48px;
    color: #555;
  }
  .title-suffix {
    padding-top: 10px;
    letter-spacing: 2px;
    font-size: 16px;
    opacity: 0.5;
  }
  .home-svg-content{
    .svg-content-main {
      width: 800px;
    }
  }
  .init-bottom {
    margin-top: 50px;
    width: 100%;
    text-align: center;
    height: 150px;
    line-height: 150px;
    background: #f7fbfd;
  }
}
</style>
