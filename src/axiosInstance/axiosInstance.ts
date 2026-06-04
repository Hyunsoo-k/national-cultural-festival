import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: process.env.END_POINT,
  params: {
    serviceKey: process.env.SERVICE_KEY
  }
});