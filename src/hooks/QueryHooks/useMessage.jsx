import { messageService } from "@/API/services/messageService";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useAllMessage = (page, limit) => {
    return useQuery({
      queryKey: ["message", page, limit],
      queryFn: () => messageService.getMessage(page, limit),
      // refetchOnWindowFocus: false,
    });
  }
  

  export const useSendMessage = () => {
    return useMutation({
      mutationFn: (data) => {
        return messageService.sendMessage(data);
      }
    });
  }