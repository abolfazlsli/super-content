"use client";

import {
  BellOutlined,
  DashboardOutlined,
  HeartOutlined,
  HomeOutlined,
  MenuOutlined,
  CustomerServiceOutlined,
  WalletOutlined,
  BorderOutlined,
  WindowsOutlined,
  FileTextOutlined,
} from "@ant-design/icons";

import { Badge, Button, Col, Dropdown, Row, Space } from "antd";

import Link from "next/link";

import { userStor } from "../../src/store/user-store/userStore";

import { useState } from "react";

import { CircleUserRound, LogIn, UserRoundPlus } from "lucide-react";

import { CuButton } from "./widgets/buttons";

import { Logout } from "./widgets/logout";

export const MenuHolder = ({ children }: { children: React.ReactNode }) => {
  return (
    <Col className="bg-white! w-full! p-2 rounded-b-xl shadow-md">
      {children}
    </Col>
  );
};

export const RegisterMenu = () => {
  return (
    <MenuHolder>
      <Row>
        <Link href={"/login"} className="w-full cursor-pointer">
          <CuButton
            className="profileBtn w-full! mb-2!"
            icon={<LogIn size={19} strokeWidth={1.9} />}
          >
            <span className="text-[15px] font-medium">ورود</span>
          </CuButton>
        </Link>
      </Row>

      <Row>
        <Link href={"/register"} className="w-full cursor-pointer">
          <CuButton
            className="profileBtn"
            icon={<UserRoundPlus size={19} strokeWidth={1.9} />}
          >
            <span className="text-[15px] font-medium">ثبت نام</span>
          </CuButton>
        </Link>
      </Row>
    </MenuHolder>
  );
};

export const DashboardMenu = () => {
  return (
    <MenuHolder>
      <Row>
        <Link href={"/dashboard"} className="w-full! cursor-pointer">
          <CuButton className="profileBtn w-full!" icon={<DashboardOutlined />}>
            داشبورد
          </CuButton>
        </Link>
      </Row>

      <Row>
        <Link href={"/register"} className="w-full cursor-pointer">
          <CuButton className="profileBtn" icon={<WalletOutlined />}>
            کیف پول
          </CuButton>
        </Link>
      </Row>

      <Row>
        <Logout />
      </Row>
    </MenuHolder>
  );
};

const mobileNavigation = [
  { label: "خانه", href: "/", icon: <HomeOutlined /> },
  { label: "دسته‌بندی‌ها", href: "#", icon: <WindowsOutlined /> },
  { label: "وبلاگ", href: "#", icon: <FileTextOutlined /> },
  {
    label: "پشتیبانی",
    href: "#",
    icon: <CustomerServiceOutlined />,
  },
];

export default function Header() {
  const { userInfo } = userStor();

  const [loading, setLoading] = useState<boolean>(false);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-99 h-20 w-full">
        <div className="absolute inset-0 backdrop-blur-2xl rounded-b-[30%]" />

        <div className="absolute inset-0 bg-linear-to-b from-white via-white/70 via-60% to-transparent bottom-0" />

        <div className="relative z-10 flex h-15 items-center justify-center">
          <header className="header shadow-cu rounded-3xl w-[80%] absolute top-5 max-md:top-2 max-md:w-[calc(100%-20px)] max-md:rounded-2xl">
            <div className="headerInner max-md:flex! max-md:w-full! max-md:items-center! max-md:gap-2!">
              <Button
                type="text"
                shape="circle"
                icon={<MenuOutlined />}
                className="hidden! max-md:flex! max-md:h-9! max-md:w-9! max-md:shrink-0! max-md:items-center! max-md:justify-center! max-md:p-0!"
                onClick={() => setMobileMenuOpen((value) => !value)}
              />

              <Link
                href="/"
                className="logo cursor-pointer max-md:shrink-0!"
                aria-label="محتوا پلاس"
              >
                <span className="logoIcon">◖</span>
                <span>محتوا پلاس</span>
              </Link>

              <div className="relative w-full max-w-md mx-6 max-md:mx-0! max-md:min-w-0! max-md:flex-1! max-md:max-w-none!">
                <input
                  type="text"
                  placeholder="جستجو در محتوا..."
                  className="w-full h-11 rounded-full bg-gray-100 px-5 outline-none transition focus:bg-white focus:ring-2 focus:ring-gray-200"
                />
              </div>
              <nav className="nav max-md:hidden!">
                <a className="active cursor-pointer text-[15px] font-medium text-slate-800">
                  خانه
                </a>

                <a className="cursor-pointer text-[15px] font-medium text-slate-800">
                  دسته‌بندی‌ها
                </a>

                <a className="cursor-pointer text-[15px] font-medium text-slate-800">
                  وبلاگ
                </a>

                <a className="cursor-pointer text-[15px] font-medium text-slate-800">
                  پشتیبانی
                </a>
              </nav>
              <Space size={6} className="max-md:hidden!">
                <Button
                  type="text"
                  shape="circle"
                  className="cursor-pointer"
                  icon={<HeartOutlined style={{ fontSize: 19 }} />}
                />

                <Badge dot>
                  <Button
                    type="text"
                    shape="circle"
                    className="cursor-pointer"
                    icon={<BellOutlined style={{ fontSize: 19 }} />}
                  />
                </Badge>

                <Dropdown
                  trigger={["click"]}
                  popupRender={() =>
                    userInfo?.name ? <DashboardMenu /> : <RegisterMenu />
                  }
                >
                  <Button
                    className="profileBtn mt-0! cursor-pointer"
                    icon={<CircleUserRound size={21} strokeWidth={1.8} />}
                    loading={loading}
                  >
                    {userInfo?.name ?? "ورود | ثبت نام"}
                  </Button>
                </Dropdown>
              </Space>
            </div>
          </header>
        </div>

        <div
          dir="rtl"
          className={`fixed top-[66px] right-2 z-100 w-[220px] overflow-hidden rounded-2xl border border-slate-100 bg-white p-1.5 shadow-xl transition-[opacity,transform,visibility] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden ${
            mobileMenuOpen
              ? "visible translate-y-0 scale-100 opacity-100"
              : "invisible -translate-y-5 scale-90 opacity-0"
          }`}
        >
          {mobileNavigation.map((item, index) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                transitionDelay: mobileMenuOpen
                  ? `${index * 45 + 80}ms`
                  : "0ms",
              }}
              className={`flex h-11 w-full items-center justify-start gap-3 rounded-xl px-4 text-right text-sm font-medium text-slate-800 transition-[opacity,transform,background-color,color] duration-300 ease-out hover:bg-(--primary)/6 hover:text-(--primary) ${
                mobileMenuOpen
                  ? "translate-x-0 opacity-100"
                  : "translate-x-4 opacity-0"
              }`}
            >
              <span className="flex w-5 shrink-0 items-center justify-center text-[16px] text-slate-500 transition-transform duration-300">
                {item.icon}
              </span>

              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      </div>

      <div className="h-30 w-full" />
    </>
  );
}
