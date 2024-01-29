<template>
  <div class="dashboard-view">
    <PerformanceByGenderChart />
    <AverageScoresChart />
    <StudentTable />

    <!-- Other components as needed -->
  </div>
</template>

<script>
import StudentTable from '../components/StudentTable.vue';
import PerformanceByGenderChart from '../components/PerformanceByGenderChart.vue';
import AverageScoresChart from '../components/AverageScoresChart.vue';

export default {
  name: 'Dashboard',
  components: {
    StudentTable,
    PerformanceByGenderChart,
    AverageScoresChart,
  },
};
</script>
