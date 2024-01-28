<!-- src/views/Dashboard.vue -->
<template>
    <div>
      <Navbar />
      <div class="container mx-auto p-4">
        <PerformanceChart />
        <StudentTable />
      </div>
    </div>
  </template>
  
  <script>
  import Navbar from '@/components/Navbar.vue';
  import PerformanceChart from '@/components/PerformanceChart.vue';
  import StudentTable from '@/components/StudentTable.vue';
  
  export default {
    components: {
      Navbar,
      PerformanceChart,
      StudentTable
    }
  };
  </script>
  