import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5001/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchTeams = () => apiClient.get('/teams');
export const fetchTeamById = (id) => apiClient.get(`/teams/${id}`);
export const fetchMatches = () => apiClient.get('/matches');
export const fetchPointsTable = () => apiClient.get('/points-table');
export const fetchNews = () => apiClient.get('/news');
// Add more functions as needed