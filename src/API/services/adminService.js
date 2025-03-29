import axiosInstance from '../axiosConfig';
import { API_ENDPOINTS } from '../apiEndpoints';

export const  adminService = {
  createAdmin: async (allData) => {
    try{
        const response = await axiosInstance.post(API_ENDPOINTS.ADMINS.ADD_ADMIN, allData);
    return response.data;
    }catch(error){
        console.log(error);
        throw error;
    }
  },
  getAllAdmin: async () => {
    try{
    const response = await axiosInstance.get(API_ENDPOINTS.ADMINS.ALL_ADMINS);
    return response.data;
    }catch(error){
        console.log(error);
        throw error;
    }
  },
  changeStatus: async (data) => {
    try{
      const response = await axiosInstance.post(API_ENDPOINTS.USERS.CHANGE_STATUS, data);
      return response.data;
    }catch(error){
      console.log(error);
      throw error;
    }
  },
  dashbordData: async () => {
    try{
    const response = await axiosInstance.get(API_ENDPOINTS.ADMINS.DASHBOARD);
    return response.data;
    }catch(error){
        console.log(error);
        throw error;
    }
  },
//   deleteCar: async (id) => {
//     const response = await axiosInstance.post(API_ENDPOINTS.CARS.DELETE_CAR, { id } );
//     return response.data;
//   }
 
}

