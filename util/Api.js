import axios from 'axios';

export const httpClient = axios.create({
  baseURL: `http://localhost:8000/`, //YOUR_API_URL HERE
  headers: {
    'Content-Type': 'application/json',
  },
});
