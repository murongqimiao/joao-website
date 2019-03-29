<!-- 主文件 -->
<template>
  <div class="__className__">
    <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
      <line-chart :chartData="data.lineChartData[currentPick]"/>
    </el-row>
    <el-row :gutter="32">
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <raddar-chart/>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <pie-chart/>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <bar-chart/>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { dashboardData } from './data.js'
import LineChart from '@/components/LineChart'
import RaddarChart from '@/components/RaddarChart'
import PieChart from '@/components/PieChart'
import BarChart from '@/components/BarChart'

export default {
  components: {
    LineChart,
    RaddarChart,
    PieChart,
    BarChart
  },
  props: {},
  data () {
    return {
      data: __className__Data,
      currentPick: 'newVisitis'
    }
  },
  created () {},
  mounted () {
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
.__className__ {
    width: 100%;
    text-align: center;
    margin-top: 20px;
     .chart-wrapper {
      background: #fff;
      padding: 16px 16px 0;
      margin-bottom: 32px;
    }
}
</style>
