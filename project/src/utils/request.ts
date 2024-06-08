//axios secondary installation: Use requests and interceptors
import axios from 'axios';
import { ElMessage } from 'element-plus';
// import user-realted modules
import useUserStore from '@/store/modules/user';

//first step: use axios.create() to create a new axios instance
//(other configurations:fundamental path, timeout time)
const request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API, // '/api'
  timeout: 5000, //5s
});

//second step: use interceptors to handle requests and responses
request.interceptors.request.use(
  (config) => {
    let userStore = useUserStore();
    if (userStore.token) {
      config.headers.token = userStore.token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

request.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    let message = '';
    let states = error.response.status || '500';
    switch (states) {
      case 401:
        message = 'Unauthorized';
        break;
      case 403:
        message = 'Forbidden';
        break;
      case 404:
        message = 'Not Found';
        break;
      case 500:
        message = 'Internal Server Error';
        break;
      default:
        message = 'Network Error';
        break;
    }
    ElMessage({
      type: 'error',
      message,
    });
    return Promise.reject(error);
  },
);

export default request;
