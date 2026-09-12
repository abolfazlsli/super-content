import { network } from "./network";

/* Edit Instance */
export const updateContentInstance = (data: { instance_id: string; name: any /** unrecognized schema type — please verify manually */; caption: any /** unrecognized schema type — please verify manually */; filds_id: any /** unrecognized schema type — please verify manually */ }) =>
  network(`/content/instance`, "PUT", data);

/* Create Instance */
export const createContentInstance = (data: { name: string; caption: any /** unrecognized schema type — please verify manually */; filds: any /** unrecognized schema type — please verify manually */ }) =>
  network(`/content/instance`, "POST", data);

/* Get Instance List */
export const getContentInstances = (params?: { offset?: number; size?: number }) =>
  network(`/content/instances`, "GET", undefined, params);

/* Get Instance Filds */
export const getContentInstanceFildByInstanceId = (instance_id: string) =>
  network(`/content/instance/filds/${instance_id}`, "GET");

/* Unarchive Instance */
export const updateContentInstanceUnarchiveById = (id: string, data?: any) =>
  network(`/content/instance/unarchive/${id}`, "PUT", data);

/* Unarchive Fild Instance */
export const updateContentInstanceUnarchiveFildByInstanceFildid = (instance_fildid: string, data?: any) =>
  network(`/content/instance/unarchiveFilds/${instance_fildid}`, "PUT", data);

/* Archive Instance */
export const deleteContentInstanceArchiveById = (id: string) =>
  network(`/content/instance/archive/${id}`, "DELETE");

/* Archive Fild Instance */
export const deleteContentInstanceArchiveFildByInstanceFildid = (instance_fildid: string) =>
  network(`/content/instance/archiveFilds/${instance_fildid}`, "DELETE");
