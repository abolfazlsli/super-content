const BASE_URL = ""; // TODO: set your API base URL
type QueryValue = string | number | boolean | Array<string | number | boolean> | null | undefined;
type QueryParams = Record<string, QueryValue>;

const buildQueryString = (params?: QueryParams): string => {
  if (!params) return "";

  const query = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value === undefined || value === null) return;

    if (Array.isArray(value)) {
      value.forEach((item) => query.append(key, String(item)));
    } else {
      query.append(key, String(value));
    }
  });

  const qs = query.toString();
  return qs ? `?${qs}` : "";
};
export const buildFormData = (data: Record<string, any>): FormData => {
  const formData = new FormData();
  Object.entries(data).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach((item) => formData.append(key, item as any));
    } else {
      formData.append(key, value as any);
    }
  });
  return formData;
};

export const network = async <T = any>(
  path: string,
  method: string = "GET",
  body?: any,
  params?: QueryParams
): Promise<T> => {
  const isFormData = body instanceof FormData;
  const url = `${BASE_URL}${path}'${buildQueryString(params)}`;

  const response = await fetch(url, {
    method,
    headers: isFormData ? undefined : { "Content-Type": "application/json" },
    body: body ? (isFormData ? body : JSON.stringify(body)) : undefined,
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status} ${response.statusText}`);
  }

  const contentType = response.headers.get("content-type") || "";
  return (contentType.includes("application/json") ? response.json() : response.text()) as Promise<T>;
};
