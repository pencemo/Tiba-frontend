import axiosInstance from '../axiosConfig';
import { API_ENDPOINTS } from '../apiEndpoints';

export const notificationService = {
  adminNotification: async () => {
    try {
      const response = await axiosInstance.get(API_ENDPOINTS.NOTIFICATION.ADMIN_NOTIFICATION);
      return response.data;
    } catch (error) {
      console.error("Error ", error);
      throw error;
    }
  },
  userNotification: async () => {
    try {
      const response = await axiosInstance.get(API_ENDPOINTS.NOTIFICATION.USER_NOTIFICATION);
      return response.data;
    } catch (error) {
      console.error("Error ", error);
      throw error;
    }
  },
  makeRead: async (data) => {
    try {
      const response = await axiosInstance.post(API_ENDPOINTS.NOTIFICATION.MAKE_READ, data);
      return response.data;
    } catch (error) {
      console.error("Error ", error);
      throw error;
    }
  },
    
}