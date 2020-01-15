<!--   空白组件模板 author by murongqimiao@live.cn  -->
<template>
  <div class="form-input">
    <div class="label"><span class="require" v-if="componentData.require">*</span>{{ componentData.label }}</div>
    <el-select :value="formDetail" @change="sel" placeholder="请选择">
    <el-option
      v-for="item in componentData.selectContent"
      :key="item.value"
      :label="item.label"
      :value="item.value">
      </el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  props: {
    formDetail: {
      type: String,
      default: () => ''
    },
    componentData: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {}
  },
  created () {
  },
  methods: {
    sel (val) { this.$emit('changeValue', this.componentData.key, val) }
  }
}
</script>

<style lang="scss">
.form-input {
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
}
</style>
