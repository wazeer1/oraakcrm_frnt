// src/api/axiosInstance.js
import axios from "axios";
import { logout, setLoading, login } from "../store/account/accountsSlice"; // Assuming you have Redux actions
import { selectAccessToken } from "../store/account/accountsSelectors"; // Your selectors for tokens
import store from "../store/store";
import { constants } from "../utils/constants/constants";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/api/v1/",
  timeout: 10000,
});

// Request Interceptor
axiosInstance.interceptors.request.use(
  async (config) => {
    // Get access token from Redux state or wherever it's stored
    const accessToken = selectAccessToken(store.getState());
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`; // Attach token to headers
    }
    return config;
  },
  (error) => {
    // Do something with the request error
    return Promise.reject(error);
  }
);

// Response Interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    // Any status code within the range of 2xx cause this function to trigger
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    const { status } = error.response || {};

    if (!error.response) {
      // Network error or server unavailable
      console.error("Network/Server error:", error);
      alert("Network error. Please check your connection or try again later.");
      return Promise.reject(error);
    }

    switch (status) {
      case 400:
        console.error("Bad Request: ", error.response.data);
        alert("Bad Request: Invalid data.");
        break;
      case 401:
        // Unauthorized - Handle token refresh or logout if refresh fails
        if (!originalRequest._retry) {
          originalRequest._retry = true;
          try {
            const refreshToken = store.getState().accounts.refresh_token; // Adjust based on your state structure
            const { data } = await axios.post(
              `${process.env.REACT_APP_API_BASE_URL}/auth/refresh-token`,
              { token: refreshToken }
            );
            store.dispatch(login({ access_token: data.access_token })); // Update token in state
            originalRequest.headers.Authorization = `Bearer ${data.access_token}`;
            return axiosInstance(originalRequest); // Retry original request
          } catch (refreshError) {
            store.dispatch(logout()); // Logout if token refresh fails
            alert("Session expired. Please log in again.");
            window.location.href = "/login"; // Redirect to login page
          }
        }
        break;
      case 403:
        console.error("Forbidden: ", error.response.data);
        alert(
          "You do not have the required permissions to perform this action."
        );
        break;
      case 404:
        console.error("Not Found: ", error.response.data);
        alert("Requested resource not found.");
        break;
      case 429:
        console.error("Too Many Requests: ", error.response.data);
        alert("You are making too many requests. Please try again later.");
        break;
      case 500:
        console.error("Internal Server Error: ", error.response.data);
        alert("An internal server error occurred. Please try again later.");
        break;
      default:
        console.error(
          `Unexpected error (status: ${status}): `,
          error.response.data
        );
        alert("An unexpected error occurred.");
        break;
    }

    store.dispatch(setLoading(false)); // Reset loading state
    return Promise.reject(error); // Always return a rejected promise
  }
);

export default axiosInstance;
