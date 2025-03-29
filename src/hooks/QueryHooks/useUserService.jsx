import { authService } from "@/API/services/authService"
import { userService } from "@/API/services/userService"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"

export const useUserData = () => {
  return useQuery({
    queryKey: ["allData",],
    queryFn: ()=> userService.allData(),
    keepPreviousData: true,
  })
}

export const userProfile = () => {
  return useQuery({
    queryKey: ["user",],
    queryFn: ()=> authService.getUser(),
    keepPreviousData: true,
  })
}

export const useEditProfiel = () => {
  const queryClient= useQueryClient();
return useMutation({
  mutationFn: (data) => {
    return authService.editProfile(data);
  },
  onSuccess: () => {
    queryClient.invalidateQueries("user");
  },
});
}