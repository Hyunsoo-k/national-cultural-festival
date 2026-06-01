import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_END_POINT,
  params: {
    serviceKey: process.env.NEXT_PUBLIC_SERVICE_KEY
  }
});