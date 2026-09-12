import { network } from "./network";

/* Create Role */
export const createAdminRoles = (data: { name: string; caption: any /** unrecognized schema type — please verify manually */; premissionsid: any /** unrecognized schema type — please verify manually */; companyId: any /** unrecognized schema type — please verify manually */ }) =>
  network(`/admin/roles`, "POST", data);

/* Get Roles */
export const getAdminRoles = (params?: { offset?: number; size?: number }) =>
  network(`/admin/roles`, "GET", undefined, params);

/* Edit Role */
export const updateAdminRoles = (data: { roleid: string; name: any /** unrecognized schema type — please verify manually */; caption: any /** unrecognized schema type — please verify manually */; premissionsid: any /** unrecognized schema type — please verify manually */ }) =>
  network(`/admin/roles`, "PUT", data);

/* Get Public Roles */
export const getAdminRolesPublic = (params?: { offset?: number; size?: number }) =>
  network(`/admin/roles/public`, "GET", undefined, params);

/* Get Company Roles */
export const getAdminRolesCompanyById = (id: string, params?: { offset?: number; size?: number }) =>
  network(`/admin/roles/company/${id}`, "GET", undefined, params);

/* Get Company Roles */
export const getAdminRolesCompany = (params?: { id?: any /** unrecognized schema type — please verify manually */; offset?: number; size?: number }) =>
  network(`/admin/roles/company`, "GET", undefined, params);

/* Get Role By Id */
export const getAdminRoleById = (id: string) =>
  network(`/admin/roles/${id}`, "GET");

/* Set Premission For Role */
export const updateAdminAsyingPremissionToRole = (data: { permissionid: string; roleid: string }) =>
  network(`/admin/asying-premission-to-role`, "PUT", data);

/* Delete Premission From Partner */
export const deleteAdminRemovePremission = () =>
  network(`/admin/remove-premission`, "DELETE");

/* Remove Role */
export const deleteAdminRoleById = (id: string) =>
  network(`/admin/role/${id}`, "DELETE");
