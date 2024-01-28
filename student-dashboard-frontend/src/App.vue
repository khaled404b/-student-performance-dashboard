<template>
  <div id="app">
    <Navbar />
    <StudentTable/>
    <router-view/>
    <Footer />
    
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import StudentTable from './components/StudentTable.vue';


export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
    StudentTable,

  }
};
</script>

<style>
/* Global styles and Tailwind imports */
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
</style>
