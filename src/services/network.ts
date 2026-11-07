import { message } from "antd";
import axios, {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";
import { getCookie } from "./cookie";

export const API_URL =
  process.env.NEXT_PUBLIC_API_URL ?? "http://127.0.0.1:8000";
  // "http://192.168.10.21:8000",

const client = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

/* آدرس مستقیم فایل آپلود شده */
export const fileUrl = (id?: string | null) =>
  id ? `${API_URL}/files/get-file/${id}` : "";

export const buildFormData = (data: Record<string, any>): FormData => {
  const formData = new FormData();

  Object.entries(data).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach((item) => formData.append(key, item));
    } else {
      formData.append(key, value);
    }
  });

  return formData;
};

export const network = async <T = any>(
  path: string,
  method: AxiosRequestConfig["method"] = "GET",
  body?: any
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

    console.error("Network Error:", {
      message: error.message,
      status: error.response?.status,
      data: error.response?.data,
    });
    if (!error.status) message.warning("اتصال شما به اینترنت برقرار نیست")
    return {
      data : error as any ,
      sucsess : false
    }
  }
};