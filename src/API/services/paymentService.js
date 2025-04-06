import axiosInstance from "../axiosConfig";
import { API_ENDPOINTS } from "../apiEndpoints";

export const paymentServices = {
  
  allPayment: async (count, starting_after, ending_before) => {
    try {
      const response = await axiosInstance.get(API_ENDPOINTS.PAYMENT.ALL_PAYMENTS, {  params: { count, starting_after, ending_before }, });
      return response.data;
    } catch (error) {
      console.error("Error fetching users:", error);
      throw error; // Re-throw the error to be handled by React Query
    }
  },

};
