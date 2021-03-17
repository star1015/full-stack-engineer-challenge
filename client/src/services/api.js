import axios from 'axios';
import logger from '../utils/logger';

const baseApi = axios.create({
  baseURL: process.env.API_URL,
});

baseApi.interceptors.request.use(
  async (config) => {
    logger.debug(config.method, config.url, { data: config.data, header: config.headers });
    return config;
  },
  (error) => {
    logger.error(error);
    return Promise.reject(error);
  },
);

export default baseApi;
