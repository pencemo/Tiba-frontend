import axiosInstance from '../axiosConfig';
import { API_ENDPOINTS } from '../apiEndpoints';

export const authService = {
  login: async (credentials) => {
    const response = await axiosInstance.post(API_ENDPOINTS.AUTH.LOGIN, credentials);
    return response.data;
  },
  logout: async () => {
    const response = await axiosInstance.post(API_ENDPOINTS.AUTH.LOGOUT);
    return response.data;
  },
  getUser: async () => {
      const response = await axiosInstance.post(API_ENDPOINTS.AUTH.ISOUTH);
      return response.data;
  },
  createUser: async (userData) => {
    const response = await axiosInstance.post(API_ENDPOINTS.AUTH.REGISTER, userData);
    return response.data;
  },
  sendOTP: async (userData) => {
    const response = await axiosInstance.post(API_ENDPOINTS.AUTH.SEND_OTP, userData);
    return response.data;
  },
  verifyOTP: async (userData) => {
    const response = await axiosInstance.post(API_ENDPOINTS.AUTH.VERIFY_OTP, userData);
    return response.data;
  },
  changePassword: async (userData) => {
    const response = await axiosInstance.post(API_ENDPOINTS.AUTH.CHANGE_PASSWORD, userData);
    return response.data;
  },
  editProfile: async (userData) => {
    const response = await axiosInstance.post(API_ENDPOINTS.AUTH.EDIT_PROFILE, userData, {
      headers: {
        'Content-Type': 'multipart/form-data'
    }
    });
    return response.data;
  },
}