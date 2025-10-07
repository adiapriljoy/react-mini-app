import { useQuery } from "@tanstack/react-query";
import type { ICalculation } from "../../models/interface";
import { getCalculations } from "../../services/calculation";

export const useGetCalculations = () => {
  return useQuery<ICalculation[]>({
    queryKey: ["calculations"],
    queryFn: getCalculations,
  });
};
