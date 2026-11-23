import { message } from "antd";
import axios, {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";
import { getCookie } from "./cookie";

export const API_URL =
  process.env.NEXT_PUBLIC_IS_DEV == "0" ? 
  process.env.NEXT_PUBLIC_API_URL_DEVELOP : 
  process.env.NEXT_PUBLIC_API_URL_PRODACTION
  // process.env.NEXT_PUBLIC_API_URL ?? "http://127.0.0.1:8000";
  // // "http://192.168.10.21:8000",

const client = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  timeout: 15_000,
});

/* آدرس مستقیم فایل آپلود شده */
export const fileUrl = (id?: string | null) =>
  id ? `${API_URL}/files/get-file/${id}` : "";

export const buildFormData = (data: Record<string, unknown>): FormData => {
  const formData = new FormData();

  Object.entries(data).forEach(([key, value]) => {
    if (value === null || value === undefined) return;

    if (Array.isArray(value)) {
      value.forEach((item) => {
        if (item !== null && item !== undefined) {
          formData.append(
            key,
            typeof Blob !== "undefined" && item instanceof Blob
              ? item
              : String(item),
          );
        }
      });
      return;
    }

    formData.append(
      key,
      typeof Blob !== "undefined" && value instanceof Blob
        ? value
        : String(value),
    );
  });

  return formData;
};

export const network = async <T = any>(
  path: string,
  method: AxiosRequestConfig["method"] = "GET",
  body?: unknown
): Promise<{data : AxiosResponse<T> , sucsess: boolean }> => {
  try {
    const isFormData = body instanceof FormData;
    const token = getCookie("acsess_token");

    // برای FormData هدر Content-Type رو خود مرورگر با boundary ست میکنه
    const headers: Record<string, string> = isFormData
      ? {}
      : { "Content-Type": "application/json" };

    if (token) headers["Authorization"] = `Bearer ${token}`;

    const response = await client.request<T>({
      url: path,
      method,
      data: body,
      headers,
    });

    return {data : response , sucsess : true};
  } catch (err) {
    const error = err as AxiosError;

    if (process.env.NODE_ENV !== "production") {
      console.error("Network Error:", {
        message: error.message,
        status: error.response?.status,
        data: error.response?.data,
      });
    }

    if (!error.response) message.warning("اتصال شما به اینترنت برقرار نیست");
    return {
      data : error as any ,
      sucsess : false
    }
  }
};
