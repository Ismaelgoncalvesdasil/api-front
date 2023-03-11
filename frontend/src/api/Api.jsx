import axios from 'axios';

export const Api = axios.create({
  baseURL: 'http://localhost:3000/',
  // baseURL: 'https://apipgc2-test8.onrender.com/'
});
