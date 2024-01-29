import axios from 'axios';

const API_URL = 'http://localhost:3000/students';

export const getStudents = async () => {
  try {
    const response = await axios.get(`${API_URL}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching students:', error);
    throw error;
  }
};

export const getStudentPerformanceByGender = async () => {
  try {
    const response = await axios.get(`${API_URL}/performance/gender`);
    return response.data;
  } catch (error) {
    console.error('Error fetching performance by gender:', error);
    throw error;
  }
};

export const getAverageScores = async () => {
  try {
    const response = await axios.get(`${API_URL}/performance/average-scores`);
    return response.data;
  } catch (error) {
    console.error('Error fetching average scores:', error);
    throw error;
  }
};
