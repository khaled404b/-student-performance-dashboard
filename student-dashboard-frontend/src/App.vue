<template>
  <div id="app">
    <Navbar />
    <div class="container mx-auto p-4">
      <router-view/>
      <StudentTable/>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import PerformanceChart from './components/PerformanceChart.vue';
import StudentTable from './components/StudentTable.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    StudentTable,
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
