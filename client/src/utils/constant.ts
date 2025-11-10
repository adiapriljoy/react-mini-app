import type { ITodoStatusColor } from "../models/interface";
import type { TTodoStatus } from "../models/type";

export const appStatuses = ["Available", "Coming Soon"] as const;

export const todoStatuses = ["Pending", "Ongoing", "Done"] as const;

export const todoStatusColor: Record<TTodoStatus, ITodoStatusColor> = {
  Pending: {
    board: "bg-orange-900/30 border border-orange-700/20",
    card: "bg-orange-600/20 border border-orange-900/20",
  },
  Ongoing: {
    board: "bg-yellow-900/30 border border-yellow-700/20",
    card: "bg-yellow-600/20 border border-yellow-900/20",
  },
  Done: {
    board: "bg-green-900/30 border border-green-700/20",
    card: "bg-green-600/20 border border-green-900/20",
  },
};
