import { carServices } from "@/API/services/carService";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useCarMutation = (options = {}) => {
    const queryClient= useQueryClient();
  return useMutation({
    mutationFn: (data) => {
      return carServices.addCar(data);
    },
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries("cars");
      if (options.onSuccess) {
        options.onSuccess(data, variables, context);
      }
    },
    onError: (error, variables, context) => {
      // Call the onError callback from options if provided
      if (options.onError) {
        options.onError(error, variables, context);
      }
    },
  });
}

export const useEditCar = (options = {}) => {
    const queryClient= useQueryClient();
  return useMutation({
    mutationFn: (data) => {
      return carServices.editCar(data);
    },
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries("cars");
      if (options.onSuccess) {
        options.onSuccess(data, variables, context);
      }
    },
    onError: (error, variables, context) => {
      // Call the onError callback from options if provided
      if (options.onError) {
        options.onError(error, variables, context);
      }
    },
  });
}

export const useCarSatusChange = (options = {}) => {
    const queryClient= useQueryClient();
  return useMutation({
    mutationFn: (data) => {
      return carServices.changeStatus(data);
    },
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries("cars");
      if (options.onSuccess) {
        options.onSuccess(data, variables, context);
      }
    },
    onError: (error, variables, context) => {
      // Call the onError callback from options if provided
      if (options.onError) {
        options.onError(error, variables, context);
      }
    },
  });
}

export const useCarDeleteMute = () => {
  const queryClient= useQueryClient();
  return useMutation({
    mutationFn: (id) => {
      return carServices.deleteCar(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries("cars");
    },
  });
}

export const useAllCars = (page, limit) => {
  return useQuery({
    queryKey: ["cars", page, limit],
    queryFn: () => carServices.getAllCars(page, limit),
    // refetchOnWindowFocus: false,
  });
}

export const useAllCarsUser = (page, limit) => {
  return useQuery({
    queryKey: ["cars", page, limit],
    queryFn: () => carServices.getAllCarsUser(page, limit),
    // refetchOnWindowFocus: false,
  });
}

export const useOneCar = (id) => {
  return useQuery({
    queryKey: ["cars"],
    queryFn: () => carServices.getOneCar(id),
    // refetchOnWindowFocus: false,
  });
}