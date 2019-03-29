<!-- author by murongqimiao@live.cn  -->
<template>
  <div class="mainDes_content">
    <p>
      长久以来,程序员都在利用复用提高产能, 同样的, 此项目也是基于DRY(<i>don`t repeat yourself</i>)原则对生产工具进行优化.
    </p>
    <p>他可以:</p>
    <p>1.快速生成<b>符合规范的空项目</b>, 内置统一的ajax封装, 统一的eslint规范, 统一的工具库, 配置统一的UI组件库</p>
    <p>2.一键安装物料 (组件、 模块), 凡是cli库里大家提交的物料, 均可以实现<b>一键安装</b>, <b>高效复用</b></p>
    <img style="margin-left: 50px;" src="../../../assets/images/inityourmodules.gif" alt="操作示例">
    <p>横向对比其他公司成品, <b>无论是阿里的飞冰, 还是美团的乐高</b>, 一旦开源意味着适应世面上大部分框架和情境, 意味着牺牲业务场景捆绑, 反不如业务线配置符合自己业务情境的高耦合的物料</p>
    <p>此工具仅是对前端工程化的狭隘探索, 希望有更多的研发集思广益, 交流进步</p>
  </div>
</template>

<script>
export default {
  props: {},
  data () {
    return {
      data: [{ p: 2, t: 3, d: 1, e: 3 },
        { p: 2, t: 4, d: 1, e: 3 },
        { p: 2, t: 4, d: 1, e: 3 },
        { p: 2, t: 4, d: 1, e: 3 },
        { p: 3, t: 4, d: 2, e: 3 },
        { p: 1, t: 3, d: 2, e: 3 },
        { p: 2, t: 4, d: 3, e: 3 } ]
    }
  },
  created () {
    this.ArrayRewrapper(this.data, ['p', 't', 'd'])
  },
  methods: {
    ArrayRewrapper (Arr, args) {
      let _args = args
      let _Arr = Arr

      const changeArr = (curArr, str) => {
        if (Object.keys(curArr[0]).indexOf(str) > -1) {
          return this.nestOnce(curArr, str)
        } else {
          curArr.forEach((item, i) => {
            curArr[i].children = changeArr(item.children, str)
          })
          return curArr
        }
      }

      const next = () => {
        let str = _args[0]
        if (!_args.length) {
          console.log('结束', _Arr)
          return _Arr
        } else {
          _Arr = changeArr(_Arr, str)
          setTimeout(() => {
            next()
          })
        }
        _args.shift()
      }

      setTimeout(() => {
        next()
      })
    },
    nestOnce (Arr, str) {
      let _ResStr = []
      let _Res = []
      Arr.map(item => {
        if (_ResStr.indexOf(item[str]) < 0) _ResStr.push(item[str])
      })
      _ResStr.map((item, i) => {
        _Res[i] = {
          children: []
        }
        _Res[i][str] = item
        Arr.forEach(each => {
          let _each = JSON.parse(JSON.stringify(each))
          delete _each[str]
          if (each[str] === item) {
            _Res[i].children.push(_each)
          }
        })
      })
      return _Res
    }

  }
}
</script>

<style lang="scss">
.mainDes_content {
    width: 1200px;
    text-align: left;
    text-indent: 50px;
    margin-left: 20px;
    color: rgba(0,0,0,0.5);
    font-family: none;
    p {
      line-height: 30px;
    }
    img {
      margin-top:30px;
      margin-bottom: 30px;
    }
}
</style>
