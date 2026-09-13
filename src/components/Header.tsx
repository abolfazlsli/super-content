"use client";

import {
  BellOutlined,
  DashboardOutlined,
  HeartOutlined,
  LogoutOutlined,
  UserOutlined,
  WalletOutlined,
} from "@ant-design/icons";

import { Badge, Button, Col, Dropdown, message, Row, Space } from "antd";

import Link from "next/link";

import { userStor } from "../../src/store/user-store/userStore";

import { checkUserInfo, logOut } from "../utils/regs";

import { useRouter } from "next/navigation";

import { useState } from "react";

import { LogIn, LucideClipboardSignature } from "lucide-react";

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
          <CuButton className="profileBtn w-full! mb-2!" icon={<LogIn />}>
            ورود
          </CuButton>
        </Link>
      </Row>
      <Row>
        <Link href={"/register"} className="w-full cursor-pointer">
          <CuButton className="profileBtn" icon={<LucideClipboardSignature />}>
            ثبت نام
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

export default function Header() {
  const { userInfo } = userStor();
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  const moveToLogin = async () => {
    setLoading(true);
    const user = await checkUserInfo();

    if (!user) {
      router.push("/login");
    } else {
      message.info("شما قبلا وارد شدید کردید");
    }

    setLoading(false);
  };

  return (
    <>
    <div className="fixed top-0 left-0 right-0 z-99 h-20 w-full">
    <div className="absolute inset-0 backdrop-blur-2xl rounded-b-[30%]" />

    <div className="absolute inset-0 bg-linear-to-b from-white via-white/70 via-60% to-transparent bottom-0" />

    <div className="relative z-10 flex h-15 items-center justify-center">
    <header className="header shadow-cu rounded-3xl w-[80%] absolute top-5">
      <div className="headerInner">
        <div className="logo cursor-pointer">
          <span className="logoIcon">◖</span>
          <span>محتوا پلاس</span>
        </div>

        <div className="relative w-full max-w-md mx-6">
          <input
            type="text"
            placeholder="جستجو در محتوا..."
            className="w-full h-11 rounded-full bg-gray-100 px-5 outline-none transition focus:bg-white focus:ring-2 focus:ring-gray-200"
          />
        </div>

        <nav className="nav">
          <a className="active cursor-pointer">خانه</a>
          <a className="cursor-pointer">دسته‌بندی‌ها</a>
          <a className="cursor-pointer">وبلاگ</a>
          <a className="cursor-pointer">پشتیبانی</a>
        </nav>

        <Space size={6}>
          <Button
            type="text"
            shape="circle"
            className="cursor-pointer"
            icon={<HeartOutlined />}
          />

          <Badge dot>
            <Button
              type="text"
              shape="circle"
              className="cursor-pointer"
              icon={<BellOutlined />}
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
              icon={<UserOutlined />}
              loading={loading}
            >
              {userInfo?.name ?? ""}
            </Button>
          </Dropdown>
        </Space>
      </div>
    </header>
    </div>
    </div>
    <div className="h-30 w-full"></div>
    </>
  );
}
