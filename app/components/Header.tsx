"use client";

import {
  BellOutlined,
  HeartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Badge, Button, Space } from "antd";
import Link from "next/link";

export default function Header() {
  const username = localStorage.getItem("username")
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
          <Link href={"/login"}>
            <Button className="profileBtn" icon={<UserOutlined />}>
              {
                username ?? "ورود یا ثبت‌نام"
              }
            </Button>
          </Link>
        </Space>
      </div>
    </header>
  );
}
