import { network } from "./network";

/* Register User */
export const createUsersRegister = (data: { name: string; username: string; phone: string; password: string }) =>
  network(`/users/register`, "POST", data);

/* Login User */
export const createUsersLogin = (data: { username: string; password: string }) =>
  network(`/users/login`, "POST", data);

/* Get User Profile */
export const getUsersProfile = () =>
  network(`/users/profile`, "GET");
