"use client";

import { useMemo, useState } from "react";
import {
  BellOutlined,
  BookOutlined,
  SaveFilled,
  CheckOutlined,
  FilterOutlined,
  HeartOutlined,
  HomeOutlined,
  LeftOutlined,
  MenuOutlined,
  PlayCircleOutlined,
  RightOutlined,
  SearchOutlined,
  StarFilled,
  UserOutlined,
} from "@ant-design/icons";
import {
  Badge,
  Button,
  Card,
  Col,
  Drawer,
  Empty,
  Input,
  Pagination,
  Radio,
  Row,
  Select,
  Space,
  Tag,
  Typography,
} from "antd";
import { DynamicEntryData } from "../components/entries/DynamicEntryData";
import type { Entry } from "../components/entries/types";

const { Title, Text, Paragraph } = Typography;

const categories = ["همه", "برنامه‌نویسی", "طراحی", "بازاریابی"];

const entries: Entry[] = [
  {
    id: 1,
    instance: { name: "دوره آموزشی" },
    data: [
      { field: { id: 1, name: "عنوان", type_of: "str" }, value: "دوره جامع طراحی UI/UX" },
      { field: { id: 2, name: "توضیحات", type_of: "str" }, value: "اصول طراحی رابط کاربری و تجربه کاربری با تمرکز روی پروژه‌های واقعی." },
      { field: { id: 3, name: "زمان", type_of: "str" }, value: "۸ ساعت" },
      { field: { id: 4, name: "امتیاز", type_of: "int" }, value: 4.8 },
      { field: { id: 5, name: "نوع محتوا", type_of: "select" }, value: "ویدیو" },
      { field: { id: 6, name: "دسته‌بندی", type_of: "select" }, value: "طراحی" },
    ],
    price: 2900000,
    paid: true,
  },
  {
    id: 2,
    instance: { name: "راهنما" },
    data: [
      { field: { id: 7, name: "عنوان", type_of: "str" }, value: "راهنمای کامل وردپرس" },
      { field: { id: 8, name: "توضیحات", type_of: "str" }, value: "نصب، تنظیمات، افزونه‌ها و نکات مهم وردپرس قدم به قدم." },
      { field: { id: 9, name: "زمان", type_of: "str" }, value: "۶ ساعت" },
      { field: { id: 10, name: "امتیاز", type_of: "int" }, value: 4.6 },
      { field: { id: 11, name: "نوع محتوا", type_of: "select" }, value: "ویدیو" },
      { field: { id: 12, name: "دسته‌بندی", type_of: "select" }, value: "برنامه‌نویسی" },
    ],
    price: 0,
    paid: false,
  },
  {
    id: 3,
    instance: { name: "مجموعه تصاویر" },
    data: [
      { field: { id: 13, name: "عنوان", type_of: "str" }, value: "مجموعه تصاویر استوک" },
      { field: { id: 14, name: "توضیحات", type_of: "str" }, value: "بیش از ۵۰۰ عکس با کیفیت برای پروژه‌های شخصی و تجاری." },
      { field: { id: 15, name: "تعداد", type_of: "int" }, value: 500 },
      { field: { id: 16, name: "امتیاز", type_of: "int" }, value: 4.7 },
      { field: { id: 17, name: "نوع محتوا", type_of: "select" }, value: "تصویر" },
      { field: { id: 18, name: "دسته‌بندی", type_of: "select" }, value: "طراحی" },
    ],
    price: 0,
    paid: false,
  },
  {
    id: 4,
    instance: { name: "قالب" },
    data: [
      { field: { id: 19, name: "عنوان", type_of: "str" }, value: "قالب آماده وب‌سایت شرکتی" },
      { field: { id: 20, name: "توضیحات", type_of: "str" }, value: "قالب مدرن و واکنش‌گرا برای راه‌اندازی سریع سایت شرکتی." },
      { field: { id: 21, name: "امتیاز", type_of: "int" }, value: 4.5 },
      { field: { id: 22, name: "نوع محتوا", type_of: "select" }, value: "فایل" },
      { field: { id: 23, name: "دسته‌بندی", type_of: "select" }, value: "برنامه‌نویسی" },
    ],
    price: 0,
    paid: false,
  },
  {
    id: 5,
    instance: { name: "پادکست" },
    data: [
      { field: { id: 24, name: "عنوان", type_of: "str" }, value: "پادکست مدیریت زمان" },
      { field: { id: 25, name: "توضیحات", type_of: "str" }, value: "تکنیک‌های کاربردی مدیریت زمان و افزایش بهره‌وری روزانه." },
      { field: { id: 26, name: "زمان", type_of: "str" }, value: "۱.۵ ساعت" },
      { field: { id: 27, name: "امتیاز", type_of: "int" }, value: 4.4 },
      { field: { id: 28, name: "نوع محتوا", type_of: "select" }, value: "صوت" },
      { field: { id: 29, name: "دسته‌بندی", type_of: "select" }, value: "بازاریابی" },
    ],
    price: 99000,
    paid: true,
  },
  {
    id: 6,
    instance: { name: "دوره آموزشی" },
    data: [
      { field: { id: 30, name: "عنوان", type_of: "str" }, value: "آموزش Git و GitHub" },
      { field: { id: 31, name: "توضیحات", type_of: "str" }, value: "از Git پایه تا workflow حرفه‌ای تیمی و مدیریت repository." },
      { field: { id: 32, name: "زمان", type_of: "str" }, value: "۴ ساعت" },
      { field: { id: 33, name: "امتیاز", type_of: "int" }, value: 4.7 },
      { field: { id: 34, name: "نوع محتوا", type_of: "select" }, value: "ویدیو" },
      { field: { id: 35, name: "دسته‌بندی", type_of: "select" }, value: "برنامه‌نویسی" },
    ],
    price: 0,
    paid: false,
  },
];

function valueOf(entry: Entry, field: string) {
  return entry.data.find((x) => x.field.name === field)?.value;
}

export default function HomePage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("همه");
  const [drawer, setDrawer] = useState(false);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [price, setPrice] = useState("all");
  const [sort, setSort] = useState("popular");
  const [page, setPage] = useState(1);

  const result = useMemo(() => {
    const q = query.trim().toLowerCase();

    const data = entries.filter((entry) => {
      const title = String(valueOf(entry, "عنوان") ?? "").toLowerCase();
      const cat = String(valueOf(entry, "دسته‌بندی") ?? "");
      const priceOk =
        price === "all" ||
        (price === "free" && !entry.paid) ||
        (price === "paid" && entry.paid);

      return (
        (!q || title.includes(q)) &&
        (category === "همه" || cat === category) &&
        priceOk
      );
    });

    if (sort === "priceLow") data.sort((a, b) => (a.price ?? 0) - (b.price ?? 0));
    if (sort === "priceHigh") data.sort((a, b) => (b.price ?? 0) - (a.price ?? 0));
    return data;
  }, [query, category, price, sort]);

  const toggleFavorite = (id: number) =>
    setFavorites((old) =>
      old.includes(id) ? old.filter((x) => x !== id) : [...old, id]
    );

  const clearFilters = () => {
    setQuery("");
    setCategory("همه");
    setPrice("all");
    setSort("popular");
    setPage(1);
  };

  return (
    <main className="app">
      <header className="header">
        <div className="headerInner">
          <div className="logo">
            <span className="logoIcon">◖</span>
            <span>محتوا پلاس</span>
          </div>

          <nav className="nav">
            <a className="active">خانه</a>
            <a>دسته‌بندی‌ها</a>
            <a>وبلاگ</a>
            <a>پشتیبانی</a>
          </nav>

          <Space size={6}>
            <Button type="text" shape="circle" icon={<HeartOutlined />} />
            <Badge dot>
              <Button type="text" shape="circle" icon={<BellOutlined />} />
            </Badge>
            <Button className="profileBtn" icon={<UserOutlined />}>
              علی محمدی
            </Button>
          </Space>
        </div>
      </header>

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

      <div className="mobileSearch">
        <Input
          prefix={<SearchOutlined />}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="جستجو در محتوا..."
        />
      </div>

      <section className="content">
        <aside className="desktopFilters">
          <FilterPanel
            category={category}
            setCategory={setCategory}
            price={price}
            setPrice={setPrice}
            clear={clearFilters}
          />
        </aside>

        <div className="results">
          <div className="resultsHeader">
            <div>
              <Title level={3}>محبوب‌ترین محتواها</Title>
              <Text type="secondary">{result.length} نتیجه</Text>
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

          {result.length === 0 ? (
            <Card className="emptyCard">
              <Empty
                image={Empty.PRESENTED_IMAGE_SIMPLE}
                description={
                  <span>
                    محتوایی با این مشخصات پیدا نشد
                  </span>
                }
              >
                <Button type="primary" onClick={clearFilters}>
                  حذف فیلترها
                </Button>
              </Empty>
            </Card>
          ) : (
            <Row gutter={[16, 16]}>
              {result.map((entry) => (
                <Col key={entry.id} xs={24} sm={12} lg={8}>
                  <EntryCard
                    entry={entry}
                    favorite={favorites.includes(entry.id)}
                    toggleFavorite={() => toggleFavorite(entry.id)}
                  />
                </Col>
              ))}
            </Row>
          )}

          <Pagination
            current={page}
            total={Math.max(50, result.length)}
            pageSize={6}
            showSizeChanger={false}
            onChange={setPage}
            className="pagination"
          />
        </div>
      </section>

      <Drawer
        title="فیلترها"
        placement="right"
        open={drawer}
        onClose={() => setDrawer(false)}
        width={330}
        footer={
          <Button type="primary" block onClick={() => setDrawer(false)}>
            اعمال فیلترها
          </Button>
        }
      >
        <FilterPanel
          category={category}
          setCategory={setCategory}
          price={price}
          setPrice={setPrice}
          clear={clearFilters}
        />
      </Drawer>

      <nav className="bottomNav">
        <a className="selected"><HomeOutlined /><span>خانه</span></a>
        <a><HeartOutlined /><span>علاقه‌مندی‌ها</span></a>
        <a><BookOutlined /><span>دسته‌بندی</span></a>
        <a><UserOutlined /><span>پروفایل</span></a>
      </nav>
    </main>
  );
}

function FilterPanel({
  category,
  setCategory,
  price,
  setPrice,
  clear,
}: {
  category: string;
  setCategory: (v: string) => void;
  price: string;
  setPrice: (v: string) => void;
  clear: () => void;
}) {
  return (
    <div className="filterPanel">
      <div className="filterPanelHead">
        <Title level={4}>فیلترها</Title>
        <Button type="link" onClick={clear}>پاک کردن همه</Button>
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

function EntryCard({
  entry,
  favorite,
  toggleFavorite,
}: {
  entry: Entry;
  favorite: boolean;
  toggleFavorite: () => void;
}) {
  const title = String(valueOf(entry, "عنوان") ?? "بدون عنوان");
  const description = String(valueOf(entry, "توضیحات") ?? "");
  const duration = String(valueOf(entry, "زمان") ?? "");
  const rating = Number(valueOf(entry, "امتیاز") ?? 0);
  const type = String(valueOf(entry, "نوع محتوا") ?? "");

  return (
    <Card
      className="entryCard"
      cover={
        <div className="cardCover">
          <div className="coverPattern">
            {entry.paid ? "محتوای ویژه" : "محتوای رایگان"}
          </div>
          <Button
            shape="circle"
            className="bookmark"
            icon={
              favorite ? (
                <SaveFilled className="bookmarkActive" />
              ) : (
                <SaveFilled />
              )
            }
            onClick={toggleFavorite}
          />
          <Tag color={entry.paid ? "purple" : "green"} className="priceTag">
            {entry.paid ? "پرداختی" : "رایگان"}
          </Tag>
        </div>
      }
      actions={[
        <Text key="price" strong className={entry.paid ? "" : "freeText"}>
          {entry.paid
            ? `${entry.price?.toLocaleString("fa-IR")} تومان`
            : "رایگان"}
        </Text>,
        <Button key="view" type="primary" size="small">
          مشاهده <LeftOutlined />
        </Button>,
      ]}
    >
      <Text className="instanceText">{entry.instance.name}</Text>
      <Title level={4} ellipsis={{ rows: 2 }}>{title}</Title>
      <Paragraph ellipsis={{ rows: 2 }} className="description">
        {description}
      </Paragraph>

      <div className="meta">
        {duration && <span><PlayCircleOutlined /> {duration}</span>}
        {type && <span><BookOutlined /> {type}</span>}
        <span className="rating"><StarFilled /> {rating}</span>
      </div>

      <DynamicEntryData
        entry={entry}
        exclude={["عنوان", "توضیحات", "زمان", "امتیاز", "نوع محتوا", "دسته‌بندی"]}
      />
    </Card>
  );
}