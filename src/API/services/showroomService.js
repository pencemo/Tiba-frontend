import axiosInstance from '../axiosConfig';
import { API_ENDPOINTS } from '../apiEndpoints';

export const  showroomService = {
  addShowroom: async (allData) => {
    try{
        const response = await axiosInstance.post(API_ENDPOINTS.SHOWROOM.ADD_SHOWROOM, allData);
    return response.data;
    }catch(error){
        console.log(error);
        throw error;
    }
  },
  getAllShowroom: async () => {
    try{
    const response = await axiosInstance.get(API_ENDPOINTS.SHOWROOM.ALL_SHOWROOM);
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

