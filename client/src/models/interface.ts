import type { LucideIcon } from "lucide-react";

export interface ICalculation {
  _id?: string;
  expression: string;
  result: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface IAppItem {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  status: "Available" | "Coming Soon";
  available: boolean;
  path: string;
}
