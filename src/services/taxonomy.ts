"use client";

import { useEffect, useState } from "react";
import { network } from "./network";

export type GroupKind = "grade" | "subject" | "type";

export interface TaxonomyCategory {
  id: string;
  name: string;
  color?: string;
  icon?: { id: string; file_name: string } | null;
}

export interface TaxonomyGroup {
  id: string;
  name: string;
  caption: string | null;
  color: string;
  kind: GroupKind | null;
  icon: { id: string; file_name: string } | null;
  categories: TaxonomyCategory[];
}

export interface Taxonomy {
  /* مقطع‌ها (گروه) ← پایه‌ها (دسته‌بندی) */
  grades: TaxonomyGroup[];
  /* گروه‌های درسی ← درس‌ها */
  subjects: TaxonomyGroup[];
  /* دسته‌بندی‌های نوع محتوا */
  types: TaxonomyCategory[];
  all: TaxonomyGroup[];
}

const EMPTY: Taxonomy = { grades: [], subjects: [], types: [], all: [] };

let cache: Promise<Taxonomy> | null = null;

const loadTaxonomy = async (): Promise<Taxonomy> => {
  const groups: TaxonomyGroup[] = [];
  let offset = 0;

  // همه گروه‌ها (هر درخواست حداکثر ۳۰ تا)
  while (true) {
    const res = await network<{ result: TaxonomyGroup[]; total: number }>(
      `/categorys/group-categories?offset=${offset}&size=30`,
    );
    if (!res.sucsess) throw new Error("taxonomy");
    groups.push(...res.data.data.result);
    offset += 30;
    if (offset >= res.data.data.total) break;
  }

  return {
    grades: groups.filter((group) => group.kind === "grade"),
    // گروه بدون نوع، گروه درسی حساب میشه
    subjects: groups.filter((group) => !group.kind || group.kind === "subject"),
    types: groups
      .filter((group) => group.kind === "type")
      .flatMap((group) => group.categories),
    all: groups,
  };
};

export const fetchTaxonomy = () => {
  if (!cache) {
    cache = loadTaxonomy().catch((error) => {
      cache = null;
      throw error;
    });
  }
  return cache;
};

export function useTaxonomy() {
  const [taxonomy, setTaxonomy] = useState<Taxonomy>(EMPTY);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ignore = false;

    fetchTaxonomy()
      .then((data) => {
        if (!ignore) setTaxonomy(data);
      })
      .catch(() => {
        if (!ignore) setTaxonomy(EMPTY);
      })
      .finally(() => {
        if (!ignore) setLoading(false);
      });

    return () => {
      ignore = true;
    };
  }, []);

  return { ...taxonomy, loading };
}

/* پیدا کردن مقطعِ یک پایه */
export const findGradeGroup = (taxonomy: Taxonomy, gradeId: string) =>
  taxonomy.grades.find((group) =>
    group.categories.some((category) => category.id === gradeId),
  );

/* ---------------- لینک صفحه محتواها ---------------- */

export type ContentsQuery = {
  base?: string;
  level?: string;
  subject?: string;
  type?: string;
  q?: string;
  sort?: string;
};

export const contentsHref = (query: ContentsQuery) => {
  const params = new URLSearchParams();
  Object.entries(query).forEach(([key, value]) => {
    if (value) params.set(key, value);
  });
  const text = params.toString();
  return text ? `/contents?${text}` : "/contents";
};

/* ---------------- آمار ---------------- */

export type CategoryCounts = Record<string, Record<string, number>>;

export const getCategoryCounts = async (rows: string[], cols?: string[]) => {
  if (!rows.length) return {} as CategoryCounts;
  const params = new URLSearchParams();
  rows.forEach((row) => params.append("rows", row));
  cols?.forEach((col) => params.append("cols", col));

  const res = await network<{ result: CategoryCounts }>(
    `/categorys/categorys/counts?${params.toString()}`,
  );
  return res.sucsess ? res.data.data.result : ({} as CategoryCounts);
};

export type SiteStats = {
  contents: number;
  teachers: number;
  students: number;
  categories: number;
};

export const getSiteStats = async (): Promise<SiteStats | null> => {
  const res = await network<{ result: SiteStats }>(`/categorys/stats`);
  return res.sucsess ? res.data.data.result : null;
};
