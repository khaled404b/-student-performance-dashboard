<template>
  <div class="performance-by-gender-chart">
    <bar-chart :data="chartData"></bar-chart>
  </div>
</template>

<script>
import BarChart from 'vue-chartkick';
import 'chart.js';
import { getStudentPerformanceByGender } from '../Service/studentService';

export default {
  name: 'PerformanceByGenderChart',
  components: {
    BarChart,
  },
  data() {
    return {
      chartData: {},
    };
  },
  async mounted() {
    try {
      const performanceData = await getStudentPerformanceByGender();
      this.chartData = performanceData.reduce((acc, item) => {
        acc[item.sex] = [item.average_G1, item.average_G2, item.average_G3];
        return acc;
      }, {});
    } catch (error) {
      console.error('Error fetching performance by gender:', error);
    }
  },
};
</script>

<style>
.performance-by-gender-chart {
  margin: 20px;
  padding: 20px;
  border: 1px solid #cbd5e0; /* Slightly darker grey border */
  border-radius: 10px;
  background-color: #edf2f7; /* Different light background for contrast */
}
</style>
