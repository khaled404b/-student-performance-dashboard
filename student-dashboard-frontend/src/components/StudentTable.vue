<template>
    <div class="container mx-auto p-4">
      <h1 class="text-2xl font-bold mb-4">Student Performance Dashboard</h1>
      <div class="bg-white p-4 rounded-lg shadow">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">School</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sex</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Age</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">address</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">famsize</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pstatus</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Medu</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fedu</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mjob_id</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fjob_id</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">reason</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">guardian</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">traveltime</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">studytime</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">failures</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">schoolsup</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">famsup</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">paid</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">activities</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">nursery</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">higher</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">internet</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">romantic</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">famrel</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">freetime</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">goout</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dalc</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Walc</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">health</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">absences</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">G1</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">G2</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">G3</th>

            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="student in students" :key="student.student_id">
              <td class="px-6 py-4 whitespace-nowrap">{{ student.student_id }}</td>
              <td class="px-6 py-4 whitespace-nowrap">{{ student.school }}</td>
              <td class="px-6 py-4 whitespace-nowrap">{{ student.sex }}</td>
              <td class="px-6 py-4 whitespace-nowrap">{{ student.age }}</td>
              <td class="px-6 py-4 whitespace-nowrap">{{ student.address }}</td>
              <td class="px-6 py-4 whitespace-nowrap">{{ student.famsize }}</td>
              <td class="px-6 py-4 whitespace-nowrap">{{ student.Pstatus }}</td>
              <td class="px-6 py-4 whitespace-nowrap">{{ student.Medu }}</td>
              <td class="px-6 py-4 whitespace-nowrap">{{ student.Fedu }}</td>
              <td class="px-6 py-4 whitespace-nowrap">{{ student.Mjob_id }}</td>
              <td class="px-6 py-4 whitespace-nowrap">{{ student.Fjob_id }}</td>
              <td class="px-6 py-4 whitespace-nowrap">{{ student.reason }}</td>
              <td class="px-6 py-4 whitespace-nowrap">{{ student.guardian }}</td>
              <td class="px-6 py-4 whitespace-nowrap">{{ student.traveltime }}</td>
              <td class="px-6 py-4 whitespace-nowrap">{{ student.studytime }}</td>
              <td class="px-6 py-4 whitespace-nowrap">{{ student.failures }}</td>
              <td class="px-6 py-4 whitespace-nowrap">{{ student.schoolsup }}</td>
              <td class="px-6 py-4 whitespace-nowrap">{{ student.famsup }}</td>
              <td class="px-6 py-4 whitespace-nowrap">{{ student.paid }}</td>
              <td class="px-6 py-4 whitespace-nowrap">{{ student.activities }}</td>
              <td class="px-6 py-4 whitespace-nowrap">{{ student.nursery }}</td>
              <td class="px-6 py-4 whitespace-nowrap">{{ student.higher }}</td>
              <td class="px-6 py-4 whitespace-nowrap">{{ student.internet }}</td>
              <td class="px-6 py-4 whitespace-nowrap">{{ student.romantic }}</td>
              <td class="px-6 py-4 whitespace-nowrap">{{ student.famrel }}</td>
              <td class="px-6 py-4 whitespace-nowrap">{{ student.freetime }}</td>
              <td class="px-6 py-4 whitespace-nowrap">{{ student.goout }}</td>
              <td class="px-6 py-4 whitespace-nowrap">{{ student.Dalc }}</td>
              <td class="px-6 py-4 whitespace-nowrap">{{ student.Walc }}</td>
              <td class="px-6 py-4 whitespace-nowrap">{{ student.health }}</td>
              <td class="px-6 py-4 whitespace-nowrap">{{ student.absences }}</td>
              <td class="px-6 py-4 whitespace-nowrap">{{ student.G1 }}</td>
              <td class="px-6 py-4 whitespace-nowrap">{{ student.G2 }}</td>
              <td class="px-6 py-4 whitespace-nowrap">{{ student.G3 }}</td>

              <!-- Add more data fields as needed -->
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'StudentTable',
    data() {
      return { students: [] };
    },
    async mounted() {
      try {
        const response = await axios.get('http://localhost:3000/students');
        this.students = response.data;
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    }
  };
  </script>
  
  <style scoped>
  .table {
    @apply min-w-full divide-y divide-gray-200;
  }
  @media (min-width: 768px) {
    .table {
      @apply shadow-lg;
    }
  }
  </style>