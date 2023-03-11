import axios from 'axios';

export const Api = axios.create({
  baseURL: 'https://api-front-uq2q.onrender.com',
  // baseURL: 'https://apipgc2-test8.onrender.com/'
});
