import { network } from "./network";

/* Create Entry */
export const createContentEntry = (data: { instance_id: string; price: any /** unrecognized schema type — please verify manually */; entry_type: any /** unrecognized schema type — please verify manually */ }) =>
  network(`/content/entry`, "POST", data);

/* Get Entrys */
export const getContentEntry = (params?: { offset?: number; size?: number }) =>
  network(`/content/entry`, "GET", undefined, params);

/* Get Entry Filds */
export const getContentEntryFildByEntryId = (entry_id: string) =>
  network(`/content/entry/filds/${entry_id}`, "GET");

/* Get Entry Placements */
export const getContentEntryPlacements = () =>
  network(`/content/entry-placements`, "GET");
