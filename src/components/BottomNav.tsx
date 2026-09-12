"use client";

import {
  BookOutlined,
  HeartOutlined,
  HomeOutlined,
  UserOutlined,
} from "@ant-design/icons";

export default function BottomNav() {
  return (
    <nav className="bottomNav">
      <a className="selected">
        <HomeOutlined />
        <span>خانه</span>
      </a>
      <a>
        <HeartOutlined />
        <span>علاقه‌مندی‌ها</span>
      </a>
      <a>
        <BookOutlined />
        <span>دسته‌بندی</span>
      </a>
      <a>
        <UserOutlined />
        <span>پروفایل</span>
      </a>
    </nav>
  );
}
