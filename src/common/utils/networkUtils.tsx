import axios, {AxiosInstance} from 'axios';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'http://192.168.106.255:3000', // Replace with your API base URL
  timeout: 30000, // Timeout after 10 seconds
  headers: {
    'Content-Type': 'application/json',
    // Add any other default headers here
  },
});

// Optional: Add interceptors for request and response
axiosInstance.interceptors.request.use(
  config => {
    // Modify config before request is sent, for example, add auth token
    const token = 'your-auth-token'; // Replace with actual token retrieval logic
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    // Handle request error
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  response => {
    // Any status code that lies within the range of 2xx causes this function to trigger
    return response;
  },
  error => {
    // Any status codes that falls outside the range of 2xx causes this function to trigger
    // Handle response error
    if (error.response && error.response.status === 401) {
      // For example, redirect to login page if unauthorized
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
