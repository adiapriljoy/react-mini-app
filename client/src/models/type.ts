import type { appStatuses, todoStatuses } from "../utils/constant";

export type TAppStatus = (typeof appStatuses)[number];
export type TTodoStatus = (typeof todoStatuses)[number];