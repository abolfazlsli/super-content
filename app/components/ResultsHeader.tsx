"use client";

import { FilterOutlined } from "@ant-design/icons";
import { Button, Select, Space, Typography } from "antd";

const { Title, Text } = Typography;

interface ResultsHeaderProps {
  resultCount: number;
  sort: string;
  setSort: (value: string) => void;
  setDrawer: (value: boolean) => void;
}

export default function ResultsHeader({
  resultCount,
  sort,
  setSort,
  setDrawer,
}: ResultsHeaderProps) {
  return (
    <div className="resultsHeader">
      <div>
        <Title level={3}>محبوب‌ترین محتواها</Title>
        <Text type="secondary">{resultCount} نتیجه</Text>
      </div>

      <Space>
        <Button
          className="mobileFilterButton"
          icon={<FilterOutlined />}
          onClick={() => setDrawer(true)}
        >
          فیلترها
        </Button>

        <Select
          value={sort}
          onChange={setSort}
          className="sortSelect"
          options={[
            { value: "popular", label: "محبوب‌ترین" },
            { value: "priceLow", label: "ارزان‌ترین" },
            { value: "priceHigh", label: "گران‌ترین" },
          ]}
        />
      </Space>
    </div>
  );
}
