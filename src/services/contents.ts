import { fileUrl, network } from "./network";

export interface ContentCategory {
  id: string;
  name: string;
  color?: string;
  icon?: { id: string; file_name: string } | null;
  group?: { id: string; name: string; kind: string | null } | null;
}

export interface ContentFieldOption {
  id: string;
  value: string;
  label: string;
  order: number;
  is_active?: boolean;
}

export interface ContentData {
  placement: string;
  value: any;
  label: any;
  fild: {
    id: string;
    name: string;
    type_of: "str" | "int" | "bool" | "file" | "select" | "multiselect";
    options: ContentFieldOption[];
  };
}

export interface ContentEntry {
  id: string;
  status: "active" | "pendding" | "disactive";
  entry_type: "free" | "free_users" | "paid";
  price: number | null;
  like_count: number | null;
  create_at: string | null;
  categorys: ContentCategory[];
  data: ContentData[];
  creator?: { name: string | null } | null;
}

export interface ContentsResponse {
  result: ContentEntry[];
  total: number;
}

export interface GroupCategory {
  id: string;
  name: string;
  caption: string | null;
  color: string;
  icon: { id: string; file_name: string } | null;
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
  search?: string[];
  sort?: "newest" | "best" | "most-viewed" | "";
  entryType?: ContentEntry["entry_type"];
}

/* ---------------- adapter ---------------- */

export interface ContentFile {
  id: string;
  name: string;
  fieldName: string;
  url: string;
}

export interface ContentItem {
  id: string;
  title: string;
  description: string;
  type: string;
  subject: string;
  base: string;
  author: string;
  price: number;
  entryType: ContentEntry["entry_type"];
  likes: number;
  updatedAt: string;
  bannerUrl: string;
  files: ContentFile[];
  hiddenFilesCount: number;
  details: { label: string; value: string }[];
  categories: ContentCategory[];
  href: string;
}

const displayValue = (item: ContentData): string => {
  const value = item.label ?? item.value;
  if (value === null || value === undefined) return "";
  if (Array.isArray(value)) return value.join("، ");
  if (typeof value === "boolean") return value ? "بله" : "خیر";
  if (typeof value === "number")
    return new Intl.NumberFormat("fa-IR").format(value);
  return String(value);
};

const byPlacement = (entry: ContentEntry, placement: string) =>
  entry.data.find((item) => item.placement === placement);

export const formatDate = (value?: string | null) => {
  if (!value) return "";
  try {
    return new Intl.DateTimeFormat("fa-IR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(new Date(value));
  } catch {
    return "";
  }
};

export function mapEntry(entry: ContentEntry): ContentItem {
  const title = byPlacement(entry, "title");
  const caption = byPlacement(entry, "caption");
  const badge = byPlacement(entry, "badge");
  const banner = byPlacement(entry, "banner");

  const fileItems = entry.data.filter(
    (item) => item.fild.type_of === "file" && item.placement !== "banner",
  );

  const files = fileItems
    .filter((item) => item.value)
    .map((item) => ({
      id: String(item.value),
      name: String(item.label ?? item.fild.name),
      fieldName: item.fild.name,
      url: fileUrl(String(item.value)),
    }));

  const details = entry.data
    .filter(
      (item) =>
        item.fild.type_of !== "file" &&
        !["title", "caption", "badge", "banner"].includes(item.placement),
    )
    .map((item) => ({ label: item.fild.name, value: displayValue(item) }))
    .filter((item) => item.value);

  // دسته‌بندی‌ها بر اساس نوع گروهشون (پایه / درس / نوع محتوا)
  const byKind = (kind: string) =>
    entry.categorys.filter((category) =>
      kind === "subject"
        ? !category.group?.kind || category.group.kind === "subject"
        : category.group?.kind === kind,
    );
  const typeCategory = byKind("type")[0];
  const subjectCategory = byKind("subject")[0];
  const gradeCategories = byKind("grade");

  return {
    id: entry.id,
    title: (title && displayValue(title)) || "بدون عنوان",
    description: (caption && displayValue(caption)) || "",
    type:
      typeCategory?.name ||
      (badge && displayValue(badge)) ||
      subjectCategory?.name ||
      "محتوا",
    subject: subjectCategory?.name ?? "",
    base: gradeCategories.map((category) => category.name).join("، "),
    author: entry.creator?.name ?? "",
    price: entry.entry_type === "paid" ? (entry.price ?? 0) : 0,
    entryType: entry.entry_type,
    likes: entry.like_count ?? 0,
    updatedAt: formatDate(entry.create_at),
    bannerUrl:
      banner?.value && banner.fild.type_of === "file"
        ? fileUrl(String(banner.value))
        : "",
    files,
    hiddenFilesCount: fileItems.length - files.length,
    details,
    categories: entry.categorys,
    href: `/contents/${entry.id}`,
  };
}

/* ---------------- api ---------------- */

export async function getContents(
  params: GetContentsParams = {},
): Promise<ContentsResponse> {
  const searchParams = new URLSearchParams();

  searchParams.set("offset", String(params.offset ?? 0));
  searchParams.set("size", String(Math.min(params.size ?? 30, 30)));

  // هر شناسه یک شرط AND در بکند (دسته‌بندی یا گروه)
  params.categories
    ?.filter(Boolean)
    .forEach((category) => searchParams.append("category", category));

  params.search
    ?.filter((term) => term && term.trim())
    .forEach((term) => searchParams.append("search", term.trim()));

  if (params.sort) searchParams.set("sort", params.sort);
  if (params.entryType) searchParams.set("entry_type", params.entryType);

  const response = await network<ContentsResponse>(
    `/categorys/categorys/entries?${searchParams.toString()}`,
    "GET",
  );

  if (!response.sucsess) {
    throw new Error("دریافت محتوا با خطا مواجه شد");
  }

  return response.data.data;
}

export async function getContentById(id: string): Promise<ContentEntry | null> {
  const response = await network<{ result: ContentEntry }>(
    `/categorys/categorys/entries/${id}`,
    "GET",
  );

  if (!response.sucsess) return null;

  return response.data.data.result;
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
