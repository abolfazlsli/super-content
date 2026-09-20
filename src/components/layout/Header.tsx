  "use client";

import {
  BellOutlined,
  DashboardOutlined,
  HeartOutlined,
  HomeOutlined,
  MenuOutlined,
  CustomerServiceOutlined,
  WalletOutlined,
  WindowsOutlined,
  FileTextOutlined,
} from "@ant-design/icons";

import { Badge, Button, Col, Dropdown, Row, Space } from "antd";

import Link from "next/link";

import { useState } from "react";

import { CircleUserRound, LogIn, UserRoundPlus } from "lucide-react";

import { userStor } from "../../store/user-store/userStore";

import { CuButton } from "../widgets/buttons";
import { Logout } from "../widgets/logout";
import { Logo } from "../widgets/logo";

export const MenuHolder = ({ children }: { children: React.ReactNode }) => {
  return (
    <Col className="w-full! rounded-b-xl bg-white! p-2 shadow-md">
      {children}
    </Col>
  );
};

export const RegisterMenu = () => {
  return (
    <MenuHolder>
      <Row>
        <Link href="/login" className="w-full cursor-pointer">
          <CuButton
            className="profileBtn mb-2! w-full!"
            icon={<LogIn size={19} strokeWidth={1.9} />}
          >
            <span className="text-[15px] font-medium">ورود</span>
          </CuButton>
        </Link>
      </Row>

      <Row>
        <Link href="/register" className="w-full cursor-pointer">
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
        <Link href="/dashboard" className="w-full! cursor-pointer">
          <CuButton
            className="profileBtn w-full!"
            icon={<DashboardOutlined />}
          >
            داشبورد
          </CuButton>
        </Link>
      </Row>

      <Row>
        <Link href="/register" className="w-full cursor-pointer">
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
        <div className="absolute inset-0 rounded-b-[30%] backdrop-blur-2xl" />

        <div className="absolute inset-0 bottom-0 bg-linear-to-b from-white via-white/70 via-60% to-transparent" />

        <div className="relative z-10 flex h-15 items-center justify-center">
          <header className="header absolute top-5 w-[calc(100%-48px)] max-w-[1392px] rounded-3xl shadow-cu max-md:top-2 max-md:w-[calc(100%-20px)] max-md:rounded-2xl max-[1199px]:w-[calc(100%-40px)]">
            <div className="headerInner max-md:flex! max-md:w-full! max-md:items-center! max-md:gap-2! max-[1199px]:flex! max-[1199px]:w-full! max-[1199px]:items-center! max-[1199px]:gap-3!">
              <Button
                type="text"
                shape="circle"
                icon={<MenuOutlined />}
                className="hidden! h-9! w-9! shrink-0! items-center! justify-center! p-0! max-md:flex! max-[1199px]:flex!"
                onClick={() => setMobileMenuOpen((value) => !value)}
              />

              <Link
                href="/"
                className="logo cursor-pointer max-md:shrink-0! max-[1199px]:shrink-0!"
                aria-label="محتوا پلاس"
              >
                <Logo />
              </Link>

              <div className="relative mx-6 w-full max-w-md max-md:mx-0! max-md:min-w-0! max-md:flex-1! max-md:max-w-none! max-[1199px]:mx-0! max-[1199px]:min-w-0! max-[1199px]:flex-1! max-[1199px]:max-w-none!">
                <input
                  type="text"
                  placeholder="جستجو در محتوا..."
                  className="h-11 w-full rounded-full bg-gray-100 px-5 text-sm outline-none transition focus:bg-white focus:ring-2 focus:ring-gray-200 max-md:text-[13px]"
                />
              </div>

              <nav className="nav max-md:hidden! max-[1199px]:hidden!">
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

              <Space
                size={6}
                className="max-md:hidden! max-[1199px]:hidden!"
              >
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
                    className="profileBtn mt-0! max-w-[180px]! cursor-pointer overflow-hidden max-[1199px]:max-w-[140px]!"
                    icon={
                      <CircleUserRound size={21} strokeWidth={1.8} />
                    }
                    loading={loading}
                  >
                    <span className="truncate">
                      {userInfo?.name ?? "ورود | ثبت نام"}
                    </span>
                  </Button>
                </Dropdown>
              </Space>

              <div className="hidden! shrink-0! items-center! max-[1199px]:flex! max-md:hidden!">
                <Dropdown
                  trigger={["click"]}
                  popupRender={() =>
                    userInfo?.name ? <DashboardMenu /> : <RegisterMenu />
                  }
                >
                  <Button
                    className="profileBtn mt-0! h-10! max-w-[140px]! min-w-0! cursor-pointer overflow-hidden px-3! max-[900px]:max-w-[110px]!"
                    icon={
                      <CircleUserRound size={20} strokeWidth={1.8} />
                    }
                    loading={loading}
                  >
                    <span className="truncate text-sm">
                      {userInfo?.name ?? "ورود | ثبت نام"}
                    </span>
                  </Button>
                </Dropdown>
              </div>
            </div>

            <div
              dir="rtl"
              className={`absolute right-0 top-full z-100 mt-2 w-[220px] overflow-hidden rounded-2xl border border-slate-100 bg-white p-1.5 shadow-xl transition-[opacity,transform,visibility] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] max-[1199px]:block! min-[1200px]:hidden! ${
                mobileMenuOpen
                  ? "visible translate-y-0 scale-100 opacity-100"
                  : "invisible -translate-y-3 scale-95 opacity-0"
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
          </header>
        </div>
      </div>

      <div className="h-30 w-full" />
    </>
  );
}
