import { network } from "./network";

/* Get Filds */
export const getContentFilds = (params?: { offset?: number; size?: number }) =>
  network(`/content/filds`, "GET", undefined, params);

/* Create Filds */
export const createContentFilds = (data: { name: string; type_of: string; options: any /** unrecognized schema type — please verify manually */ }) =>
  network(`/content/filds`, "POST", data);

/* Edit Filds */
export const updateContentFilds = (data: { fild_id: string; name: any /** unrecognized schema type — please verify manually */; options: any /** unrecognized schema type — please verify manually */ }) =>
  network(`/content/filds`, "PUT", data);

/* Get Fild By Id */
export const getContentFildById = (id: string) =>
  network(`/content/filds/${id}`, "GET");

/* Add Optionfild To Fild */
export const updateContentOptionfildToFild = (data: { fild_id: string; options: any[] }) =>
  network(`/content/optionfild-to-fild`, "PUT", data);

/* Archive Filds */
export const updateContentFildsUnarchiveById = (id: string, data?: any) =>
  network(`/content/filds/unarchive/${id}`, "PUT", data);

/* Archive Filds */
export const deleteContentFildsArchiveById = (id: string) =>
  network(`/content/filds/archive/${id}`, "DELETE");

/* Delete Fildoption */
export const deleteContentFildsoption = () =>
  network(`/content/fildsoption`, "DELETE");
