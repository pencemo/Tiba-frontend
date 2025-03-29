import { notificationService } from "@/API/services/notificationService";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useAdminNotification = () => {
    return useQuery({
      queryKey: ["notification" ],
      queryFn: () => notificationService.adminNotification(),
      refetchOnWindowFocus: true,
      retryDelay: 5000,
    });
  }
  

export const useUserNotification = () => {
    return useQuery({
      queryKey: ["notification" ],
      queryFn: () => notificationService.userNotification(),
      refetchOnWindowFocus: true,
      retryDelay: 5000,
    });
  }
  

  export const useNotificationRead = () => {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: (ids) => {
        return notificationService.makeRead({ids});
      },
      onSuccess: () => {
        queryClient.invalidateQueries("notification");
      },
    });
  };
  