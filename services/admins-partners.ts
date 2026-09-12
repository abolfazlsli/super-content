import { network } from "./network";

/* Edit Partner */
export const updateAdminPartner = (data: { name: string; username: string; password: string }) =>
  network(`/admin/partner`, "PUT", data);

/* Create Partner */
export const createAdminPartner = (data: { name: string; username: string; phone: string; companyId: any /** unrecognized schema type — please verify manually */; password: string; role_id: any /** unrecognized schema type — please verify manually */ }) =>
  network(`/admin/partner`, "POST", data);

/* Set Role For Partner */
export const updateAdminSetRole = (data: { role_id: string; partner_id: string }) =>
  network(`/admin/set-role`, "PUT", data);

/* Get All Partners */
export const getAdminPartners = (params?: { offset?: number; size?: number }) =>
  network(`/admin/partners`, "GET", undefined, params);

/* Get Partners By Id */
export const getAdminPartnerById = (id: string) =>
  network(`/admin/partners/${id}`, "GET");

/* Get Partner Profile */
export const getAdminMe = () =>
  network(`/admin/me`, "GET");

/* Ban Partner */
export const deleteAdminPartnerById = (id: string) =>
  network(`/admin/partner/${id}`, "DELETE");
