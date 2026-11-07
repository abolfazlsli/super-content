"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { contentsHref } from "../../services/taxonomy";

import Hero from "./Hero";
import MobileSearch from "../ui/MobileSearch";

interface HomeContentProps {
  beforeResults: React.ReactNode;
}

export default function HomeContent({ beforeResults }: HomeContentProps) {
  const router = useRouter();
  const [query, setQuery] = useState("");

  // جستجو به صفحه محتواها منتقل میشه
  const handleSearch = (value: string) => {
    const q = value.trim();
    if (q) router.push(contentsHref({ q }));
  };

  return (
    <>
      <Hero
        query={query}
        setQuery={setQuery}
        category=""
        setCategory={() => {}}
        categories={[]}
        setPage={() => {}}
      />

      {beforeResults}

      <MobileSearch query={query} setQuery={setQuery} onSearch={handleSearch} />
    </>
  );
}
