import axiosInstance from '../axiosConfig';
import { API_ENDPOINTS } from '../apiEndpoints';

export const  messageService = {
  sendMessage: async (allData) => {
    try{
        const response = await axiosInstance.post(API_ENDPOINTS.MESSAGE.SEND_MESSAGE, allData);
        return response.data;
    }catch(error){
        console.log(error);
        throw error;
    }
  },
  getMessage: async (page, limit) => {
    try{
        const response = await axiosInstance.get(API_ENDPOINTS.MESSAGE.GET_MESSAGES, {  params: { page, limit }, });
      return response.data;
    }catch(error){
        console.log(error);
        throw error;
    }
  },
}

