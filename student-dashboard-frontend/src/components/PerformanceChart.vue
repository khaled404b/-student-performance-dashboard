<template>
    <div>
      <line-chart :data="chartData"></line-chart>
    </div>
  </template>
  
  <script>
  import { LineChart } from 'vue-chartkick';
  import 'chart.js';
  import axios from 'axios';
  
  export default {
    components: {
      LineChart,
    },
    data() {
      return {
        chartData: {}
      };
    },
    async mounted() {
    try {
      const response = await axios.get('http://localhost:3000/students/performance');
      // Process the response data to fit the chart
      this.chartData = response.data.reduce((acc, item) => {
        acc[item.date] = item.score;
        return acc;
      }, {});
    } catch (error) {
      console.error('Error fetching chart data:', error);
    }
  },
  };
  </script>
  