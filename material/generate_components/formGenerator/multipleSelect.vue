<!--   空白组件模板 author by murongqimiao@live.cn  -->
<template>
  <div class="form-multiple-select">
    <div class="label">
      <span class="require" v-if="componentData.require">*</span>
      {{ componentData.label }}
      <span  class="description" v-if="componentData.description">{{componentData.description}}</span>
    </div>
    <div class="flex-box">
      <div @click="selIt(item)" :class="hasSel(item) ? 'flex-box-item flex-box-item-active' : 'flex-box-item'" v-for="(item,i) in componentData.multipleSelect" :key="i">{{item}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    formDetail: {
      type: Array,
      default: () => []
    },
    componentData: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {}
  },
  created () {},
  methods: {
    hasSel (item) {
      return this.formDetail.indexOf(item) > -1
    },
    selIt (item) {
      let n = this.formDetail.indexOf(item)
      let result = this.formDetail
      if (n > -1) {
        result.splice(n, 1)
      } else {
        console.log(result)
        result.push(item)
      }
      this.$emit('changeValue', this.componentData.key, result)
    }
  }
}
</script>

<style lang="scss">
.form-multiple-select {
    width: 100%;
    text-align: left;
    color: #233B56;
    font-size: 18px;
    margin-top: 34px;
    margin-bottom: 20px;
    input {
      width: 680px;
      height: 50px;
      background:rgba(255,255,255,1);
      box-shadow:-2px 2px 22px 1px rgba(29,44,77,0.14);
      margin-top: 10px;
    }
    .require {
      color: red;
      padding-left: 10px;
      padding-right: 10px;
    }
    .flex-box {
      display: flex;
      margin-top: 22px;
    }
    .flex-box-item {
      width:104px;
      height:40px;
      background:#E8ECF2;
      border-radius:3px;
      margin-right: 16px;
      color: '#C3CBD9';
      line-height: 40px;
      text-align: center;
    }
    .flex-box-item-active {
      background: #2B3137;
      color: #fff;
    }
    .description {
      font-size:14px;
      font-family:PingFangSC-Regular,PingFang SC;
      font-weight:400;
      color:rgba(145,148,155,1);
      line-height:20px;
    }
}
</style>
