import { message } from "antd";
import axios, {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";
import { getCookie } from "./cookie";

const client = axios.create({
  baseURL: "http://127.0.0.1:8000",
  // "http://192.168.10.21:8000",
  withCredentials: true,
});

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

    const response = await client.request<T>({
      url: path,
      method,
      data: body,
      headers: isFormData
        ? {
            "Content-Type": "multipart/form-data",
            "Authorization" : `Bearer ${getCookie("acsess_token")}`
          }
        : {
            "Content-Type": "application/json",
            "Authorization" : `Bearer ${getCookie("acsess_token")}`
          } ,
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