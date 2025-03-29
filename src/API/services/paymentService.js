import axiosInstance from "../axiosConfig";
import { API_ENDPOINTS } from "../apiEndpoints";

export const paymentServices = {
  createOrder: async (data) => {
    try {
      const response = await axiosInstance.post(
        API_ENDPOINTS.PAYMENT.CREATE_ORDER,
        data
      );
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
  verifyPayment: async (data) => {
    try {
      const response = await axiosInstance.post(
        API_ENDPOINTS.PAYMENT.VERIFY_PAYMENT,
        data
      );
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
  allPayment: async (skip, count) => {
    try {
      const response = await axiosInstance.get(API_ENDPOINTS.PAYMENT.ALL_PAYMENTS, {  params: { skip, count }, });
      return response.data;
    } catch (error) {
      console.error("Error fetching users:", error);
      throw error; // Re-throw the error to be handled by React Query
    }
  },

};
