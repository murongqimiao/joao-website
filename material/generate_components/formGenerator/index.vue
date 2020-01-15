<!--   空白组件模板 author by murongqimiao@live.cn  -->
<template>
  <div class="form-generator-content">
    <component
    v-for="(item, i) in componentsData"
    v-bind:is="item.componentName"
    :componentData="item"
    :formDetail="formData[item.key]"
    @changeValue="changeValue"
    :key="i">
    </component>
  </div>
</template>

<script>
import formInput from './input'
import formTextArea from './textArea'
import formMultipleSelect from './multipleSelect'
import formUpload from './upload'
import formSelect from './select'
export default {
  components: {
    formInput,
    formTextArea,
    formMultipleSelect,
    formUpload,
    formSelect
  },
  props: {
    formData: {
      type: Object,
      default: () => {}
    },
    componentsData: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {}
  },
  created () {},
  methods: {
    changeValue (key, value) {
      let params = Object.assign({}, this.formData)
      params[key] = value
      this.$emit('updateForm', params)
    }
  }
}
</script>

<style lang="scss">
.form-generator-content {
    width: 100%;
    text-align: center;
    color: aqua;
    font-size: 50px;
    margin-top: 20px;
}
</style>
