<template>
  <div class="container mx-auto p-4">
    <h1 class="title">Student Performance Dashboard</h1>
    <div class="dashboard">
      <div class="table-container">
        <table class="table">
          <thead>
            <tr>
              <th v-for="column in columns" :key="column" class="header-cell">{{ column }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(student, index) in paginatedStudents" :key="student.student_id">
              <td v-for="(value, key) in student" :key="key" class="data-cell">{{ value }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="pagination-controls">
    <button @click="prevPage" v-if="currentPage > 1">Previous</button>
    <button @click="nextPage" v-if="currentPage < totalPages">Next</button>
  </div>

    </div>
  </div>
</template>


<script>
import axios from 'axios';

export default {
  name: 'StudentTable',
  data() {
    return {
      students: [],
      currentPage: 1,
      pageSize: 10,
      columns: ['ID', 'School', 'Sex', 'Age', 'Address', 'Family Size', 'Parent\'s Cohabitation Status', 'Mother\'s Education Level', 'Father\'s Education Level', 'Mother\'s Job', 'Father\'s Job', 'Reason for Choosing School', 'Guardian', 'Travel Time to School', 'Weekly Study Time', 'Number of Past Class Failures', 'Extra Educational Support', 'Family Educational Support', 'Extra Paid Classes', 'Extra-Curricular Activities', 'Attended Nursery School', 'Aspires to Higher Education', 'Internet Access at Home', 'In a Romantic Relationship', 'Family Relationship Quality', 'Free Time After School', 'Time Spent Going Out', 'Workday Alcohol Consumption', 'Weekend Alcohol Consumption', 'Self-Perceived Health Status', 'Number of School Absences', 'Grade in First Period', 'Grade in Second Period', 'Final Grade']
    };
  },
  computed: {
    paginatedStudents() {
      const start = (this.currentPage - 1) * this.pageSize;
      const end = start + this.pageSize;
      return this.students.slice(start, end);    },
    totalPages() {
      return Math.ceil(this.students.length / this.pageSize);
    }
  },
  methods: {
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    }
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

.title {
  font-size: 1.5em;
  font-weight: bold;
  margin-bottom: 1rem;
}

.dashboard {
  background-color: white;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow-x: auto; /* Enable horizontal scrolling if needed */
}

.table-container {
  max-width: 100%; /* Limit table container width */
  overflow-x: auto; /* Enable horizontal scrolling for the table container */
}

.table {
  width: 100%; /* Allow the table to expand horizontally */
  border-collapse: collapse;
  table-layout: auto; /* Allow table to adjust column widths based on content */
}

.header-cell {
  padding: 0.5rem;
  text-align: left;
  font-weight: 600;
  color: #333;
  background-color: #f9f9f9;
  white-space: nowrap; /* Prevent header text from wrapping */
  overflow: hidden;
  text-overflow: ellipsis;
}

.data-cell {
  padding: 0.5rem;
  text-align: left;
  border-top: 1px solid #ddd;
  white-space: nowrap; /* Prevent data text from wrapping */
  overflow: hidden;
  text-overflow: ellipsis;
}

@media (min-width: 768px) {
  .table {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
}

.pagination-controls {
  display: flex;
  justify-content: center; /* Center the buttons horizontally */
  gap: 10px; /* Add space between buttons */
  margin-top: 20px; /* Add some margin above the buttons */
}

/* Additional styles for buttons if needed */
button {
  padding: 0.5rem 1rem;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>