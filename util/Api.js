import axios from 'axios';

export const httpClient = axios.create({
  baseURL: `https://desolate-inlet-76011.herokuapp.com/`, //YOUR_API_URL HERE
  headers: {
    'Content-Type': 'application/json',
  },
});
