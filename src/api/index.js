import axios from "axios";

const axiosInstance = axios;

// TODO: Intercept requests and adds authorization header if the user is logged in
axiosInstance.interceptors.request.use(
  (config) => {
    // Send token here if the api expects a token.
    // Nothing here as the current blogs application apis does not expect any tokens to be sent in headers
    return config;
  },
  (error) => Promise.reject(error)
);
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Logout user if api responds with 401 status code.
      // Nothing here as the current blogs application does not have a login system
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
