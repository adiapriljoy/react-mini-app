import type { LucideIcon } from "lucide-react";
import type { TAppStatus, TTodoStatus } from "./type";

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
  status: TAppStatus;
  available: boolean;
  path: string;
}

export interface ITodo {
  id: string;
  title: string;
  description: string;
  category: string;
  status: TTodoStatus;
  createdAt?: Date;
  updatedAt?: Date;
}
