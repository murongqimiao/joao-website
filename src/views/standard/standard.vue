<!-- 主文件 -->
<template>
  <div class="standard">
    <Nav :active='2'></Nav>
    <div class="standard-maincontent">
      <div class="main-content-list">
        <ul>
          <li v-for="(item, i) in data.data" :key="`li_${i}`" :class="i === checked ? 'isSel' : ''" @click="choice(i)">
            {{ item.name }}
          </li>
        </ul>
      </div>
      <div class="text-content">
        <h4 style="text-align: left; padding-top: 10px;margin-bottom: 20px;">{{ data.data[checked].name }}</h4>
        <p v-for="(each, index) in data.data[checked].p" :key="`p_${index}`">{{ each }}</p>
        <img v-if="data.data[checked].imgSrc" :src="data.data[checked].imgSrc" >
        <div v-html="data.data[checked].value"></div>
        <!-- vue-router -->

        <div v-show="data.data[checked].name === '整体介绍'">
            <pre v-highlight style="text-align: left">
              <code>
                      |-api
                        |-http.js       内置axios封装

                      |-components      存放组件  可使用命令行安装需要的组件物料

                      |-model
                        |-User.ts       通用用户登录状态管理

                      |-router
                        |-index.ts      vue router对view文件夹下的index自动读取 获取抛出的路由

                      |-views
                        |-stroe.ts      vue-x对view下一级目录的vx.js进行自动注册
              </code>
            </pre>
        </div>
        <div v-show="data.data[checked].name === 'axios'">
            <pre v-highlight style="text-align: left">
              <code>
                      import http from 'api/http'

                      /**
                       * 登录范例
                       * @params post /accout/login 参数 phone=xxx&password=xxxx
                       **/
                      export function login(params) {
                        return http.post('/account/login', params)
                      }
              </code>
            </pre>
        </div>
        <div v-show="data.data[checked].name === 'vue router'">
            <pre v-highlight style="text-align: left">
              <code>
                      /*
                      * 此文件读取所有一级目录并自动注册index.js
                      */
                      import Vue from 'vue'
                      import Router from 'vue-router'

                      Vue.use(Router)

                      const routes = function () {
                        let all:any[] = []
                        const requireRouter = require.context('../views/', true, /index.js/)
                        /**
                        * 读取当前路径子文件夹所有index.js
                        */
                        requireRouter.keys().forEach(fileName => {
                          const requireConfig = requireRouter(fileName)
                          const routerArr = requireConfig.default || requireConfig
                          all = [...all, ...routerArr]
                        })
                        return all
                      }

                      export default new Router({
                        // mode: 'history', 默认hash路由
                        routes: routes(),
                      })
              </code>
            </pre>
        </div>
        <div v-show="data.data[checked].name === '登录管控'">
            <pre v-highlight style="text-align: left">
              <code>
                      import User from 'model/user'

                      let user = new User({ username: 'exampleName', password: '123456', token: 'exampleToken' })

                      user.save() 完成登录 登记缓存

                      user.load() 读取登录信息

                      user.hasToken() 判断登录状态

                      user.clear() 退出登录 清除信息
              </code>
            </pre>
        </div>
        <div>

        </div>
      </div>
    </div>
    <div class="init-bottom">JOAO @2019</div>
  </div>
</template>

<script>
import { standardData } from './data.js'
import Nav from '@/components/Nav'

export default {
  components: {
    Nav
  },
  props: {},
  data () {
    return {
      data: standardData,
      checked: 0
    }
  },
  created () {},
  mounted () {
  },
  methods: {
    choice (n) {
      // 选择某个节点
      this.checked = n
    }
  },
}
</script>

<style lang="scss" scoped>
.standard {
    width: 100%;
    height: 100vh;
    text-align: center;
    position: relative;
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
        text-align: left;
        width: 200px;
        line-height: 50px;
        border-right: 1px solid #cccccc;
        position: absolute;
        left: 0;
        top: 0;
        li {
          display: block;
          height: 50px;
          font-size: 16px;
          color: #bcbcbc;
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
        margin-left: 200px;
        padding-left: 70px;
        min-height: 60vh;
        margin-top: 50px;
        border-left: 1px solid #ccc;
        img {
          margin-top: 30px;
        }
        h2 {
          margin-bottom: 20px
        }
        p {
          font-size: 14px;
          padding-right: 20px;
          text-align: left;
          letter-spacing: 1px;
          line-height: 24px;
          opacity: 0.7;
          color: rgba(0,0,0,.5);
        }
      }
    }
}
</style>
