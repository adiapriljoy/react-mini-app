import { useQueryClient, useMutation } from "@tanstack/react-query";
import type { ICalculation } from "../../models/interface";
import {
  createCalculation,
  deleteAllCalculations,
} from "../../services/calculation";
import toast from "react-hot-toast";

export const useAddCalculation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Omit<ICalculation, "_id" | "createdAt" | "updatedAt">) =>
      createCalculation(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["calculations"] });
    },
  });
};

export function useDeleteAllCalculations() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => deleteAllCalculations(),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["calculations"] });
      toast.success(data.message || "All calculations deleted!");
    },
    onError: (error: any) => {
      toast.error(error?.message || "Failed to delete calculations");
    },
  });
}
