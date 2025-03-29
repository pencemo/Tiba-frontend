import axiosInstance from '../axiosConfig';
import { API_ENDPOINTS } from '../apiEndpoints';

export const userService = {
  allData: async () => {
    try {
      const response = await axiosInstance.get(API_ENDPOINTS.USER.GET_ALLDATA);
      return response.data;
    } catch (error) {
      console.error("Error fetching users:", error);
      throw error; // Re-throw the error to be handled by React Query
    }
  },
    
}
