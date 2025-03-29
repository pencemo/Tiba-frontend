import { bookingService } from "@/API/services/bookingService";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useAllBookings = (page, limit) => {
  return useQuery({
    queryKey: ["bookings", page, limit],
    queryFn: () => bookingService.allBooking(page, limit),
    refetchInterval: 10 * 60 * 1000,
  });
};

export const useBookingSatusChange = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => {
      return bookingService.changeStatus(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries("bookings");
    },
  });
};
