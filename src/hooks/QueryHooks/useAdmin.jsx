import { adminService } from "@/API/services/adminService";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useAdminMutation = (options = {}) => {
    const queryClient= useQueryClient();
  return useMutation({
    mutationFn: (data) => {
      return adminService.createAdmin(data);
    },
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries("admin");
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

// export const useCarDeleteMute = () => {
//   const queryClient= useQueryClient();
//   return useMutation({
//     mutationFn: (id) => {
//       return carServices.deleteCar(id);
//     },
//     onSuccess: () => {
//       queryClient.invalidateQueries("cars");
//     },
//   });
// }

export const useChangeStatus = (options = {}) => {
  const queryClient= useQueryClient();
  return useMutation({
    mutationFn: (data) => {
      return adminService.changeStatus(data);
    },
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries("admin");
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

export const useAllAdmin = () => {
  return useQuery({
    queryKey: ["admin",],
    queryFn: () => adminService.getAllAdmin(),
    // refetchOnWindowFocus: false,
  });
}

export const useDashbordData = () => {
  return useQuery({
    queryKey: ["dahsboard",],
    queryFn: () => adminService.dashbordData(),
    // refetchOnWindowFocus: false,
  });
}