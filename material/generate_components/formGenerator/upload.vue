<!--   空白组件模板 author by murongqimiao@live.cn  -->
<template>
  <div class="upload-content">
    <div class="label">
      <span class="require" v-if="componentData.require">*</span>
      {{ componentData.label }}
    </div>
    <el-upload
      action="/"
      class="upload-demo"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :http-request="customUpload"
      :file-list="formDetail"
      list-type="picture"
    >
      <el-button class="upload-btn" size="small" type="primary">点击上传</el-button>
    </el-upload>
  </div>
</template>

<script>
import User from '@/model/User'
import { fileUpload } from '../../assets/fetcher/http'
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
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePreview (file) {
      console.log(file)
    },
    getToken () {
      const userData = User.load()
      return userData.token
    },
    customUpload (file) {
      fileUpload(file).then(response => {
        console.log(this.componentData.key)

        let result = [
          {
            name: response.data.uuid,
            url: response.data.datafile
          }
        ]
        console.log(this.componentData.key, result)
        this.$emit('changeValue', this.componentData.key, result)
      })
    }
  }
}
</script>

<style lang="scss">
.upload-content {
    width: 100%;
    text-align: left;
    color: #233B56;
    font-size: 18px;
    margin-top: 34px;
    margin-bottom: 20px;
    .upload-btn {
      width:116px;
      height:40px;
      border:1px solid rgba(233,114,36,1);
      background:#fff;
      color: rgba(233,114,36,1);
      margin-top: 10px;
    }
     .require {
      color: red;
      padding-left: 10px;
      padding-right: 10px;
    }
    .upload-demo {
      width: 680px;
    }
}
</style>
