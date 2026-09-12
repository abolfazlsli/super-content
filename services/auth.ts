import { network } from "./network";

/* Admin Login */
export const createAuthAdminLogin = (data: { username_or_phone: string; password: string }) =>
  network(`/auth/admin/login`, "POST", data);

/* Partner Login */
export const createAuthPartnerLogin = (data: { username_or_phone: string; password: string }) =>
  network(`/auth/partner/login`, "POST", data);
