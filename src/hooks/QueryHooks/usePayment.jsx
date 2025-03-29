import { paymentServices } from "@/API/services/paymentService";
import { useQuery } from "@tanstack/react-query";

export const useAllPayments = (skip, count) => {
    return useQuery({
      queryKey: ["payment", skip, count],
      queryFn: () => paymentServices.allPayment(skip, count),
      // refetchOnWindowFocus: false,
    });
  }