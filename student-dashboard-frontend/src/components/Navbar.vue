<template>
    <nav class="bg-blue-500 text-white shadow-md">
      <ul class="flex justify-between items-center p-4">
        <li class="font-bold">Student Dashboard</li>
        <li>
          <router-link to="/" class="hover:text-blue-300">Home</router-link>
        </li>
        <li>
          <router-link to="/dashboard" class="hover:text-blue-300">Dashboard</router-link>
        </li>
        <!-- Add more navigation items here -->
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'Navbar',
  };
  </script>
  
  <style>
  /* Additional styling if needed */
  </style>
  