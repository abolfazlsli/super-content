import { network } from "./network";

export interface ContentCategory {
  id: string;
  name: string;
  color?: string;
  icon?: string | null;
}

export interface ContentEntry {
  id: string;
  status: string;
  entry_type: string;
  price: number;
  categorys: ContentCategory[];
  data: ContentData[];
}

export interface ContentData {
  placement: string;
  value: string;
  fild: {
    id: string;
    name: string;
    type_of: string;
    options: unknown[];
  };
  entry?: ContentEntry;
}

export interface ContentsResponse {
  result: ContentEntry[];
  total: number;
}

export interface GroupCategory {
  id: string;
  name: string;
  caption: string;
  color: string;
  icon: string | null;
  categories: ContentCategory[];
}

export interface GroupCategoriesResponse {
  result: GroupCategory[];
  total: number;
}

export interface CategoriesResponse {
  result: ContentCategory[];
  total: number;
}

export interface GetContentsParams {
  offset?: number;
  size?: number;
  categories?: string[];
}

export async function getContents(
  params: GetContentsParams = {},
): Promise<ContentsResponse> {
  const searchParams = new URLSearchParams();

  searchParams.set("offset", String(params.offset ?? 0));
  searchParams.set("size", String(params.size ?? 30));

  params.categories?.forEach((category) => {
    searchParams.append("category", category);
  });

  const query = searchParams.toString();

  const response = await network<ContentsResponse>(
    `/categorys/categorys/entries?${query}`,
    "GET",
  );

  if (!response.sucsess) {
    throw new Error("دریافت محتوا با خطا مواجه شد");
  }

  return response.data.data;
}

export async function getCategories(
  offset = 0,
  size = 30,
): Promise<CategoriesResponse> {
  const response = await network<CategoriesResponse>(
    `/categorys/categorys?offset=${offset}&size=${size}`,
    "GET",
  );

  if (!response.sucsess) {
    throw new Error("دریافت دسته‌بندی‌ها با خطا مواجه شد");
  }

  return response.data.data;
}

export async function getGroupCategories(
  offset = 0,
  size = 30,
): Promise<GroupCategoriesResponse> {
  const response = await network<GroupCategoriesResponse>(
    `/categorys/group-categories?offset=${offset}&size=${size}`,
    "GET",
  );

  if (!response.sucsess) {
    throw new Error("دریافت گروه‌بندی‌ها با خطا مواجه شد");
  }

  return response.data.data;
}
