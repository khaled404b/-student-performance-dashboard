<template>
  <div class="average-scores-chart">
    <line-chart :data="chartData"></line-chart>
  </div>
</template>

<script>
import LineChart from 'vue-chartkick';
import 'chart.js';
import { getAverageScores } from '../Service/studentService';

export default {
  name: 'AverageScoresChart',
  components: {
    LineChart,
  },
  data() {
    return {
      chartData: {},
    };
  },
  async mounted() {
    try {
      const averageScores = await getAverageScores();
      this.chartData = {
        'Average G1': averageScores.average_G1,
        'Average G2': averageScores.average_G2,
        'Average G3': averageScores.average_G3,
      };
    } catch (error) {
      console.error('Error fetching average scores:', error);
    }
  },
};
</script>

<style>
.average-scores-chart {
  margin: 20px;
  padding: 20px;
  border: 1px solid #e2e8f0; /* Light grey border */
  border-radius: 10px;
  background-color: #f7fafc; /* Light background */
}
</style>
