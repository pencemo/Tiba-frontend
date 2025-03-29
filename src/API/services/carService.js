import axiosInstance from '../axiosConfig';
import { API_ENDPOINTS } from '../apiEndpoints';

export const  carServices = {
  addCar: async (data) => {
    try{
        const response = await axiosInstance.post(API_ENDPOINTS.CARS.ADD_CAR, data, {
          headers: {
            'Content-Type': 'multipart/form-data'
        }
        });
        console.log(response.data);
    return response.data;
    }catch(error){
        console.log(error);
        throw error;
    }
  },
  editCar: async (data) => {
    try{
        const response = await axiosInstance.post(API_ENDPOINTS.CARS.EDIT_CAR, data, {
          headers: {
            'Content-Type': 'multipart/form-data'
        }
        });
    return response.data;
    }catch(error){
        console.log(error);
        throw error;
    }
  },
  changeStatus: async (data) => {
    try{
        const response = await axiosInstance.post(API_ENDPOINTS.CARS.CHANGE_STATUS, data);
    return response.data;
    }catch(error){
        console.log(error);
        throw error;
    }
  },
  getAllCars: async (page, limit) => {
    try{
        const response = await axiosInstance.get(API_ENDPOINTS.CARS.ALL_CARS, {  params: { page, limit }, });
    return response.data;
    }catch(error){
        console.log(error);
        throw error;
    }
  },
  getAllCarsUser: async (page, limit) => {
    try{
        const response = await axiosInstance.get(API_ENDPOINTS.CARS.ALL_CARS_USER, {  params: { page, limit }, });
      return response.data;
    }catch(error){
        console.log(error);
        throw error;
    }
  },
  deleteCar: async (id) => {
    const response = await axiosInstance.post(API_ENDPOINTS.CARS.DELETE_CAR, { id } );
    return response.data;
  },
  getOneCar: async (id) => {
    const response = await axiosInstance.get(API_ENDPOINTS.CARS.ONE_CAR, { params: { id } });
    return response.data;
  },
 
}

