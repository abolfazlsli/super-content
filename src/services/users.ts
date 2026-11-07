import { QuerySize } from "../../app/(dashboardzone)/types/basics";
import type { ContentEntry } from "./contents";
import { network } from "./network";

const qs = (querySize?: QuerySize | null) =>
  `offset=${querySize?.offset ?? 0}&size=${querySize?.size ?? 30}`;

export type ListResponse<T> = { result: T[]; total: number };

export type ZoneUser = {
  id: string;
  name: string;
  username: string;
  phone: string;
  status: string;
  role: "students" | "managers" | "admin" | null;
};

export type RoleRequest = {
  id: string;
  status: "pendding" | "accepted" | "rejected";
  message: string | null;
  role: string | null;
  create_at: string | null;
  user: ZoneUser;
};

/* ---------------- saves (علاقه‌مندی‌ها) ---------------- */

export const getSavedEntries = (querySize?: QuerySize | null) =>
  network<ListResponse<ContentEntry>>(`/users/saves?${qs(querySize)}`);

export const getSavedEntriesIds = () =>
  network<{ result: string[] }>(`/users/saves/ids`);

export const toggleSaveEntry = (entryId: string) =>
  network<{ result: { saved: boolean } }>(`/users/saves/${entryId}`, "POST");

/* محتواهای خریداری شده */
export const getPurchasedEntries = (querySize?: QuerySize | null) =>
  network<ListResponse<ContentEntry>>(`/users/purchased?${qs(querySize)}`);

/* محتوا به همراه فایل‌ها (بر اساس سطح دسترسی کاربر) */
export const getEntryWithFiles = (entryId: string) =>
  network<{ result: ContentEntry }>(`/users/entries/${entryId}/files`);

/* ---------------- role requests ---------------- */

export const createRoleRequest = (message?: string) =>
  network(`/users/role-request`, "POST", { message: message ?? null });

export const getMyRoleRequest = () =>
  network<{ result: RoleRequest | null }>(`/users/role-request`);

export const getRoleRequests = (
  querySize?: QuerySize | null,
  status?: RoleRequest["status"],
) =>
  network<ListResponse<RoleRequest>>(
    `/users/role-requests?${qs(querySize)}${status ? `&status=${status}` : ""}`,
  );

export const reviewRoleRequest = (id: string, accept: boolean) =>
  network(`/users/role-requests/${id}`, "PUT", { accept });

export const getZoneUsers = (
  querySize?: QuerySize | null,
  role?: ZoneUser["role"],
) =>
  network<ListResponse<ZoneUser>>(
    `/users/list?${qs(querySize)}${role ? `&role=${role}` : ""}`,
  );

export const setUserRole = (userId: string, role: "students" | "managers") =>
  network(`/users/role-up`, "POST", { user_id: userId, role });

/* ---------------- entries moderation ---------------- */

export const getEntriesByStatus = (
  querySize?: QuerySize | null,
  status: ContentEntry["status"] = "pendding",
) =>
  network<ListResponse<ContentEntry>>(
    `/users/entries?${qs(querySize)}&status=${status}`,
  );

export const setEntryStatus = (id: string, status: "active" | "disactive") =>
  network(`/users/entries/${id}/status`, "PUT", { status });
