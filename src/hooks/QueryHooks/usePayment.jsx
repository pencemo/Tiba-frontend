import { paymentServices } from "@/API/services/paymentService";
import { useQuery } from "@tanstack/react-query";

export const useAllPayments = (count, starting_after, ending_before) => {
    return useQuery({
      queryKey: ["payment", count, starting_after, ending_before],
      queryFn: () => paymentServices.allPayment(count, starting_after, ending_before),
      // refetchOnWindowFocus: false,
    });
  }