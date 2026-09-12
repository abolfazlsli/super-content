"use client";

import { ConfigProvider } from "antd";

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "var(--font-vazir), Tahoma, Arial, sans-serif",
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}