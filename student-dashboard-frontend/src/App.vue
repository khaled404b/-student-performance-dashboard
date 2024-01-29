<template>
  <div id="app">
    <div class="container mx-auto p-4">
    <Navbar/>
      <AverageScoresChart/>
      <PerformanceByGenderChart/>
      <StudentTable/>

    </div>
  </div>
  <Footer/>
</template>
<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import PerformanceByGenderChart from './components/PerformanceByGenderChart.vue';
import AverageScoresChart from './components/AverageScoresChart.vue';
import StudentTable from './components/StudentTable.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    StudentTable,
    PerformanceByGenderChart,
    AverageScoresChart,
    Footer,
  }
};
</script>

<style>
/* Global styles and Tailwind imports */
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
</style>
