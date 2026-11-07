"use client";

import Link from "next/link";

import ContentCard from "./ContentCard";

interface RelatedContent {
  id: string;
  type: string;
  title: string;
  author: string;
  rating: number;
  reviews: number;
  pages: number;
  downloads: number;
  price: number;
  discount: number;
  originalPrice: number;
}

interface RelatedContentCardProps {
  content: RelatedContent;
}

export default function RelatedContentCard({
  content,
}: RelatedContentCardProps) {
  return (
    <Link href={`/contents/${content.id}`} className="block h-full">
      <ContentCard {...content} />
    </Link>
  );
}
