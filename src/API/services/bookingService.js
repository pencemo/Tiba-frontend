import axiosInstance from "../axiosConfig";
import { API_ENDPOINTS } from "../apiEndpoints";

export const bookingService = {
  allBooking: async (page, limit) => {
    try {
      const response = await axiosInstance.get(API_ENDPOINTS.BOOKING.ALL_BOOKING, {
        params: { page, limit },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching users:", error);
      throw error; // Re-throw the error to be handled by React Query
    }
  },
  changeStatus: async (data) => {
    try {
      const response = await axiosInstance.post(API_ENDPOINTS.BOOKING.CHANGE_STATUS, data);
      return response.data;
    } catch (error) {
      console.error("Error fetching users:", error);
      throw error; // Re-throw the error to be handled by React Query
    }
  },
  dateCheck: async (data) => {
    try {
      const response = await axiosInstance.post(API_ENDPOINTS.BOOKING.DATE_CHECK, data);
      return response.data;
    } catch (error) {
      console.error("Error fetching users:", error);
      throw error; // Re-throw the error to be handled by React Query
    }
  },
};
