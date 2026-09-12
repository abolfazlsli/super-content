import { network } from "./network";

/* Create Premision */
export const createAdminPermissions = (data: { name: string; code: string }) =>
  network(`/admin/permissions`, "POST", data);

/* Get Premisions */
export const getAdminPermissions = (params?: { offset?: number; size?: number }) =>
  network(`/admin/permissions`, "GET", undefined, params);

/* Get Permissions By Id */
export const getAdminPermissionById = (id: string) =>
  network(`/admin/permissions/${id}`, "GET");

/* Edit Premission */
export const updateAdminPremissions = (data: { id: string; name: any /** unrecognized schema type — please verify manually */; code: any /** unrecognized schema type — please verify manually */; status: any /** unrecognized schema type — please verify manually */ }) =>
  network(`/admin/premissions`, "PUT", data);
