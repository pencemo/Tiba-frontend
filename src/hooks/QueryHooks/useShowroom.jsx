import { showroomService } from "@/API/services/showroomService";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useShowroomMutation = () => {
    const queryClient= useQueryClient();
  return useMutation({
    mutationFn: (data) => {
      return showroomService.addShowroom(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries("showroom");
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

export const useAllShowroom = () => {
  return useQuery({
    queryKey: ["showroom",],
    queryFn: () => showroomService.getAllShowroom(),
    // refetchOnWindowFocus: false,
  });
}