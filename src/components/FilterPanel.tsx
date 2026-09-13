"use client";

import { Button, Radio, Select, Space, Tag, Typography } from "antd";

const { Title, Text } = Typography;

interface FilterPanelProps {
  category: string;
  setCategory: (value: string) => void;
  price: string;
  setPrice: (value: string) => void;
  categories: string[];
  clear: () => void;
}

export default function FilterPanel({
  category,
  setCategory,
  price,
  setPrice,
  categories,
  clear,
}: FilterPanelProps) {
  return (
    <div className="filterPanel">
      <div className="filterPanelHead">
        <Title level={4}>فیلترها</Title>
        <Button type="link" onClick={clear} className="text-(--primary)!">
          پاک کردن همه
        </Button>
      </div>

      <div className="filterBlock">
        <Text strong>دسته‌بندی / نوع محتوا</Text>
        <Select
          value={category}
          onChange={setCategory}
          style={{ width: "100%", marginTop: 12 }}
          options={categories.map((x) => ({ label: x, value: x }))}
        />
      </div>

      <div className="filterBlock">
        <Text strong>قیمت</Text>
        <Radio.Group
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="radioGroup"
        >
          <Radio value="all">همه</Radio>
          <Radio value="free">رایگان</Radio>
          <Radio value="paid">پرداختی</Radio>
        </Radio.Group>
      </div>

      <div className="filterBlock">
        <Text strong>برچسب‌ها</Text>
        <Space wrap style={{ marginTop: 12 }}>
          <Tag>محبوب</Tag>
          <Tag>جدید</Tag>
          <Tag>پرفروش</Tag>
        </Space>
      </div>
    </div>
  );
}
