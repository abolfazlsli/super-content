"use client";

import { useMemo, useState } from "react";
import { Button, Card, Col, Drawer, Empty, Pagination, Row } from "antd";

import { Entry } from "../src/components/entries/types";
import { entries, valueOf } from "./data/entries";

import Header from "../src/components/Header";
import Hero from "../src/components/Hero";
import QuickLinks from "../src/components/quickLinks/QuickLinks";
import EducationLevelSelector from "../src/components/EducationLevelSelector";
import TrendingCourses from "../src/components/trendigCourses/TrendigCourses";
import MobileSearch from "../src/components/MobileSearch";
import FilterPanel from "../src/components/FilterPanel";
import ResultsHeader from "../src/components/ResultsHeader";
import EntryCard from "../src/components/EntryCard";
import BottomNav from "../src/components/BottomNav";
import Footer from "../src/components/Footer";

const categories = ["همه", "برنامه‌نویسی", "طراحی", "بازاریابی"];

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

    if (sort === "priceLow") {
      data.sort((a, b) => (a.price ?? 0) - (b.price ?? 0));
    }

    if (sort === "priceHigh") {
      data.sort((a, b) => (b.price ?? 0) - (a.price ?? 0));
    }

    return data;
  }, [query, category, price, sort]);

  const toggleFavorite = (id: number) => {
    setFavorites((old) =>
      old.includes(id)
        ? old.filter((x) => x !== id)
        : [...old, id]
    );
  };

  const clearFilters = () => {
    setQuery("");
    setCategory("همه");
    setPrice("all");
    setSort("popular");
    setPage(1);
  };

  const updateCategory = (value: string) => {
    setCategory(value);
    setPage(1);
  };

  const updatePrice = (value: string) => {
    setPrice(value);
    setPage(1);
  };

  return (
    <main className="app">
      <Header />

      <Hero
        query={query}
        setQuery={setQuery}
        category={category}
        setCategory={updateCategory}
        categories={categories}
        setPage={setPage}
      />

      <QuickLinks />

      <EducationLevelSelector />

      <TrendingCourses />

      <MobileSearch query={query} setQuery={setQuery} />

      <section className="content">
        <aside className="desktopFilters">
          <FilterPanel
            category={category}
            setCategory={updateCategory}
            price={price}
            setPrice={updatePrice}
            categories={categories}
            clear={clearFilters}
          />
        </aside>

        <div className="results">
          <ResultsHeader
            resultCount={result.length}
            sort={sort}
            setSort={setSort}
            setDrawer={setDrawer}
          />

          {result.length === 0 ? (
            <Card className="emptyCard">
              <Empty
                image={Empty.PRESENTED_IMAGE_SIMPLE}
                description={
                  <span>محتوایی با این مشخصات پیدا نشد</span>
                }
              >
                <Button type="primary" onClick={clearFilters}>
                  حذف فیلترها
                </Button>
              </Empty>
            </Card>
          ) : (
            <Row gutter={[16, 16]}>
              {result.map((entry: Entry) => (
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
          setCategory={updateCategory}
          price={price}
          setPrice={updatePrice}
          categories={categories}
          clear={clearFilters}
        />
      </Drawer>

      <Footer />

      <BottomNav />
    </main>
  );
}
