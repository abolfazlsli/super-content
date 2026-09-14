"use client";

import {
  HomeOutlined,
  AppstoreOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";

import Link from "next/link";

import { userStor } from "../../src/store/user-store/userStore";

const navigationItems = [
  {
    label: "خانه",
    href: "/",
    icon: <HomeOutlined />,
  },
  {
    label: "دسته‌بندی‌ها",
    href: "#",
    icon: <AppstoreOutlined />,
  },
  {
    label: "سبد خرید",
    href: "#",
    icon: <ShoppingCartOutlined />,
  },
];

export default function BottomNav() {
  const { userInfo } = userStor();

  return (
    <nav
      dir="rtl"
      className="bottomNav flex! h-[72px]! items-center! justify-around! border-t border-slate-200/80 bg-white/95 px-2 shadow-[0_-4px_20px_rgba(15,23,42,0.06)] backdrop-blur-xl"
    >
      {navigationItems.map((item, index) => (
        <Link
          key={item.label}
          href={item.href}
          className={`flex h-full min-w-0 flex-1 flex-col items-center justify-center gap-1.5 transition-all duration-200 ${
            index === 0
              ? "selected text-(--primary)"
              : "text-slate-500 hover:text-(--primary)"
          }`}
        >
          <span className="flex h-8 items-center justify-center text-[22px]">
            {item.icon}
          </span>

          <span className="whitespace-nowrap text-[13px] font-medium leading-5">
            {item.label}
          </span>
        </Link>
      ))}

      <Link
        href={userInfo?.name ? "/dashboard" : "/login"}
        className="flex h-full min-w-0 flex-1 flex-col items-center justify-center gap-1.5 text-slate-500 transition-all duration-200 hover:text-(--primary)"
      >
        <span className="flex h-8 items-center justify-center text-[22px]">
          <UserOutlined />
        </span>

        <span className="whitespace-nowrap text-[13px] font-medium leading-5">
          {userInfo?.name ? "پروفایل" : "ورود | ثبت نام"}
        </span>
      </Link>
    </nav>
  );
}
