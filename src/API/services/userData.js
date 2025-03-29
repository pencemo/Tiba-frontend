import axiosInstance from '../axiosConfig';
import { API_ENDPOINTS } from '../apiEndpoints';

export const userData = {
  allUsers: async (page, limit) => {
    try {
      const response = await axiosInstance.get(API_ENDPOINTS.USERS.ALLUSERS, {  params: { page, limit }, });
      return response.data;
    } catch (error) {
      console.error("Error fetching users:", error);
      throw error; // Re-throw the error to be handled by React Query
    }
  },
    
}
