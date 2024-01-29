<template>
  <div class="dashboard-view">
    <StudentTable />
    <PerformanceChart />
  </div>
</template>

<script>
import StudentTable from '../components/StudentTable.vue';
import PerformanceChart from '../components/PerformanceChart.vue';

export default {
  name: 'Dashboard',
  components: { StudentTable, PerformanceChart }
};
</script>
