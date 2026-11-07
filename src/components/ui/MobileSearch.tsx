"use client";

import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";

interface MobileSearchProps {
  query: string;
  setQuery: (value: string) => void;
  onSearch?: (value: string) => void;
}

export default function MobileSearch({
  query,
  setQuery,
  onSearch,
}: MobileSearchProps) {
  return (
    <div className="mobileSearch">
      <Input
        prefix={<SearchOutlined />}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onPressEnter={() => onSearch?.(query)}
        placeholder="جستجو در محتوا..."
      />
    </div>
  );
}
