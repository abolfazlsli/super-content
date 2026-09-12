"use client";

import { PlayCircleOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Input, Typography } from "antd";

const { Title, Text, Paragraph } = Typography;

interface HeroProps {
  query: string;
  setQuery: (value: string) => void;
  category: string;
  setCategory: (value: string) => void;
  categories: string[];
  setPage: (page: number) => void;
}

export default function Hero({
  query,
  setQuery,
  category,
  setCategory,
  categories,
  setPage,
}: HeroProps) {
  return (
    <section className="hero">
      <div className="heroText">
        <Text className="eyebrow">بازار محتوای آموزشی و دیجیتال</Text>
        <Title level={1}>محتوای مورد نیازت را پیدا کن</Title>
        <Paragraph>
          دسترسی سریع و آسان به بهترین محتواها و منابع آموزشی
        </Paragraph>

        <Input
          size="large"
          className="heroInput"
          prefix={<SearchOutlined />}
          suffix={
            <Button type="primary" size="large">
              جستجو
            </Button>
          }
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setPage(1);
          }}
          placeholder="نام محتوا، دسته‌بندی یا کلمه کلیدی..."
        />

        <div className="categoryPills">
          {categories.map((item) => (
            <Button
              key={item}
              className={category === item ? "categoryActive" : ""}
              onClick={() => {
                setCategory(item);
                setPage(1);
              }}
            >
              {item}
            </Button>
          ))}
        </div>
      </div>

      <div className="heroIllustration">
        <div className="fakeLaptop">
          <PlayCircleOutlined />
        </div>
        <div className="plant">🌿</div>
        <div className="fakeBook b1" />
        <div className="fakeBook b2" />
      </div>
    </section>
  );
}
