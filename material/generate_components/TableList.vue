<!--   表单组件 author by murongqimiao@live.cn  -->
<template>
  <div class="table-list">
    <el-table
      v-loading="loading"
      :data="dataList"
      stripe
      border
      max-width="100%"
      style="width: 100%"
    >
      <el-table-column
        v-for="(item, key) in tableHeaderData"
        :key="key"
        :prop="key"
        :label="item[0]"
        :min-width="item[1]"
        :sortable="item[2].sortable"
        align="center"
        show-overflow-tooltip
      />
      <el-table-column
        v-if="isShowButton"
        align="center"
        label="操作"
        width="120" >
        <template slot-scope="scope">
          <el-button
            v-for="(item, key) in buttonContent"
            :key="key"
            type="text"
            size="small"
            @click.native.prevent="clickRow(scope.$index, item.clickEvent)"
          >{{ item.buttonName }}</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  props: {
    tableHeaderData: {
      type: Object, // 表头
      default: () => {}
    },
    loading: {
      type: Boolean,
      default: () => { return false } // 加载符
    },
    buttonContent: {
      type: Array, // 按钮
      default: () => []
    },
    dataList: {
      type: Array, // 列表内容
      default: () => []
    }
  },
  data () {
    return {
      isShowButton: false
    }
  },
  created () {
    this.buttonContent
      ? (this.isShowButton = true)
      : (this.isShowButton = false)
  },
  methods: {
    clickRow (nth, event) {
      this.$emit(event, nth)
    }
  }
}
</script>

<style scss>
.table-list {
  margin-left: 20px;
}
</style>
