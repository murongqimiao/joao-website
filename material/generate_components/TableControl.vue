<!--   搜索框组件 author by murongqimiao@live.cn  -->
<template>
  <div class="mainContain-table-header">
    <el-form :inline="true">
      <div
        v-for="(item, i) in controlData.data"
        :key="i"
        class="searchDiv">
        <el-form-item
          v-if="item.controlType === 'select'"
          :label="item.controlName">
          <el-select
            v-model="conditions[item.conditionName]"
            class="short"
            size="small">
            <el-option
              v-for="(value, key) in item.options"
              :key="key"
              :label="value.label"
              :value="value.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item
          v-if="item.controlType === 'input'"
          :label="item.controlName"
          class="input-contain">
          <el-input
            v-model="conditions[item.conditionName]"
            size="small"/>
        </el-form-item>
        <el-form-item
          v-if="item.controlType === 'timePicker'"
          :label="item.controlName">
          <el-date-picker
            v-model="conditions[item.conditionName]"
            size="small"
            type="date"
            placeholder="选择日期"/>
        </el-form-item>
        <el-form-item
          v-if="item.controlType === 'DoubleTimePicker'"
          :label="item.controlName"
          size="small">
          <el-date-picker
            v-model="conditions[item.conditionName]"
            type="daterange"
            placeholder="选择日期"
          />
        </el-form-item>
      </div>
      <el-form-item>
        <el-button
          size="small"
          class="table-header-button"
          type="primary"
          @click="searchContent">搜索</el-button>
        <el-button
          size="small"
          class="table-header-button"
          type="primary"
          @click="resetData">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    controlData: {
      type: Object,
      default: () => {}
    },
    sessionData: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      conditions: {}
    }
  },
  created () {
    this.resetData()
    for (var key in this.sessionData) {
      this.conditions[key] = this.sessionData[key]
    }
    this.conditions = { ...this.conditions }
  },
  methods: {
    searchContent () {
      this.$emit('searchData', this.conditions)
    },
    resetData () {
      this.controlData.data.forEach((item, key) => {
        this.conditions[item.conditionName] = ''
      })
      this.conditions = Object.assign({}, this.conditions)
    }
  }
}
</script>

<style lang="scss">
.mainContain-table-header {
  text-align: left;
  .searchDiv {
    display: inline-block;
    vertical-align: middle;
  }
  margin-top: 20px;
  margin-left: 20px;
  .input-contain {
    vertical-align: middle;
    min-width: 284px;
  }
  .table-header-button {
    background: #00A0E6;
  }
  .el-form-item {
    margin-bottom: 10px;
  }
}
.mainContain .searchDiv {
  display: inline;
  max-width: 300px;
}

</style>
