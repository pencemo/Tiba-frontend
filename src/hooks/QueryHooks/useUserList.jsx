import { userData } from "@/API/services/userData"
import { useQuery } from "@tanstack/react-query"

export const useUserList = (page, limit) => {
  return useQuery({
    queryKey: ["users", page, limit],
    queryFn: ()=> userData.allUsers(page, limit),
    keepPreviousData: true,
  })
}