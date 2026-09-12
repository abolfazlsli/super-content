"use client";

import {
  BellOutlined,
  DashboardOutlined,
  HeartOutlined,
  LogoutOutlined,
  UserOutlined,
  WalletOutlined,
} from "@ant-design/icons";
import { Badge, Button, Col, Dropdown, Grid, message, Popover, Row, Space } from "antd";
import Link from "next/link";
import { userStor } from "../../src/store/user-store/userStore";
import { checkUserInfo, logOut } from "../utils/regs";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { LayoutDashboard, LogIn, LucideClipboardSignature } from "lucide-react";
import { CuButton } from "./widgets/buttons";
import { removeCookie } from "../services/cookie";


export const MenuHolder = ({children} : {children : React.ReactNode}) => {
  return (
    <Col className="bg-white! w-full! p-2 rounded-b-xl shadow-md">
      {children}
    </Col>
  )
}

export const RegisterMenu = () => {
  return (
    <MenuHolder>
      <Row>
        <Link href={"/login"} className="w-full">
          <CuButton className="profileBtn w-full! mb-2!" icon={<LogIn />} >
            ورود
          </CuButton>
        </Link>
      </Row>
      <Row>
        <Link href={"/register"} className="w-full">
          <CuButton className="profileBtn" icon={<LucideClipboardSignature />}>
            ثبت نام
          </CuButton>
        </Link>
      </Row>
    </MenuHolder>
  )
}

export const DashboardMenu = () => {
  return (
    <MenuHolder>
      <Row>
        <Link href={"/dashboard"} className="w-full!">
          <CuButton className="profileBtn w-full!" icon={<DashboardOutlined />} >
              داشبورد
          </CuButton>
        </Link>
      </Row>
      <Row>
        <Link href={"/register"} className="w-full">
          <CuButton className="profileBtn" icon={<WalletOutlined />}>
            کیف پول
          </CuButton>
        </Link>
      </Row>
      <Row>
          <CuButton className="profileBtn bg-red-100! text-red-500!" icon={<LogoutOutlined />} onClick={() => logOut()}>
            خروج
          </CuButton>
      </Row>
    </MenuHolder>
  )
}

export default function Header() {
  const {userInfo} = userStor()
  const router = useRouter()
  const [loading , setLoading] = useState<boolean>(false)
  const moveToLogin = async () => {
      setLoading(true)
      const user = await checkUserInfo()
      if (!user) {
        router.push("/login")
      }
      else {
        message.info("شما قبلا وارد شدید کردید")
      }
      setLoading(false)
  }
  return (
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
          <Dropdown trigger={["click"]} popupRender={() =>
        userInfo?.name
            ? <DashboardMenu />
            : <RegisterMenu />
    }>
            <Button className="profileBtn mt-0!" icon={<UserOutlined />} loading={loading}>
              {
                userInfo?.name ?? ""
              }
            </Button>
            </Dropdown>
        </Space>
      </div>
    </header>
  );
}
