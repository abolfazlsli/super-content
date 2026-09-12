import { network, buildFormData } from "./network";

/* Upload File */
export const createFilesUpload = (data: { file: string }) =>
  network(`/files/upload`, "POST", buildFormData(data));

/* Get File */
export const getFilesGetFileById = (id: string) =>
  network(`/files/get-file/${id}`, "GET");
