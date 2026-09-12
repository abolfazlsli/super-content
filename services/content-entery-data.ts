import { network } from "./network";

/* Create Enterydata */
export const createContentSenddata = (data: { entry_id: string; filds: any[] }) =>
  network(`/content/senddata`, "POST", data);

/* Get Entry Data */
export const getContentEntryData = (params?: { offset?: number; size?: number }) =>
  network(`/content/entry-data`, "GET", undefined, params);
