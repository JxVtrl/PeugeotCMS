import axios from 'axios';
import Router from 'next/router';

export const baseURL =
  process.env.NEXT_PUBLIC_NODE_ENV === 'development'
    ? process.env.NEXT_PUBLIC_API_URL_DEV
    : process.env.NEXT_PUBLIC_API_URL_PROD;

const instance = axios.create({
  baseURL,
});

instance.interceptors.request.use(async (config: any) => {
  const token = 'token bearer teste';
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
    config.headers['Content-Type'] = 'application/json';
  }

  return config;
});

instance.interceptors.response.use(
  (response: any) => response,
  (error: any) => {
    if (
      (error.response.status && error.response.status === 401) ||
      error.response.status === 403
    ) {
      console.log('not authorized');
      Router.push('/');
    }

    return Promise.reject(error);
  },
);

export default instance;
