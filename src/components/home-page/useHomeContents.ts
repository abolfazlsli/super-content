"use client";

import { useEffect, useState } from "react";
import {
  getContents,
  mapEntry,
  type ContentItem,
  type GetContentsParams,
} from "../../services/contents";

/* دریافت محتوا برای سکشن‌های صفحه اصلی */
export function useHomeContents(sort: GetContentsParams["sort"], size = 12) {
  const [items, setItems] = useState<ContentItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ignore = false;

    getContents({ sort, size })
      .then((res) => {
        if (!ignore) setItems(res.result.map(mapEntry));
      })
      .catch(() => {
        if (!ignore) setItems([]);
      })
      .finally(() => {
        if (!ignore) setLoading(false);
      });

    return () => {
      ignore = true;
    };
  }, [sort, size]);

  return { items, loading };
}

/* تبدیل به props کارت محتوا */
export const toCardProps = (item: ContentItem) => ({
  title: item.title,
  description: item.description,
  type: item.type,
  subject: item.subject,
  base: item.base,
  author: item.author,
  updatedAt: item.updatedAt,
  views: item.likes,
  price: item.price > 0 ? item.price : undefined,
  href: item.href,
});
