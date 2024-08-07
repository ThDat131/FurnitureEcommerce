import axiosClient from 'axios';

const axios = axiosClient.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

export default axios;
