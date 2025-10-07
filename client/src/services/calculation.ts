import axiosInstance from "./axiosInstance";
import type { ICalculation } from "../models/interface";

export async function getCalculations(): Promise<ICalculation[]> {
  const res = await axiosInstance.get("/calculations");
  return res.data;
}

export async function createCalculation(
  data: Omit<ICalculation, "_id" | "createdAt" | "updatedAt">
): Promise<ICalculation> {
  const res = await axiosInstance.post("/calculations", data);
  return res.data;
}

export async function deleteAllCalculations(): Promise<{ message: string }> {
  const res = await axiosInstance.delete("/calculations");
  return res.data;
}
