import { network } from "./network";

/* Create Company */
export const createAdminCompany = (data: { name: string; addres: string; telphone: string }) =>
  network(`/admin/company`, "POST", data);

/* Get All Companys */
export const getAdminCompanys = (params?: { offset?: number; size?: number }) =>
  network(`/admin/companys`, "GET", undefined, params);
