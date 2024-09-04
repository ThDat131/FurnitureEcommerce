import axiosClient from 'axios';
import { useCookies } from 'next-client-cookies';

const axios = axiosClient.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

export default axios;
