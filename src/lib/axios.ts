import process from 'process';
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});
export default api;

const localAxios = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});
export { localAxios };
