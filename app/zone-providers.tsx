
"use client";

import { ConfigProvider } from "antd";
import { useEffect } from "react";

type Zone = "landing" | "dashboard";

const zoneConfig: Record<
  Zone,
  { scopeClass: "landings-scope" | "dashboard-scope"; fontVariable: string }
> = {
  landing: {
    scopeClass: "landings-scope",
    fontVariable: "var(--font-landing)",
  },
  dashboard: {
    scopeClass: "dashboard-scope",
    fontVariable: "var(--font-dashboard)",
  },
};

export default function ZoneProviders({
  zone,
  children,
}: {
  zone: Zone;
  children: React.ReactNode;
}) {
  const { scopeClass, fontVariable } = zoneConfig[zone];

  useEffect(() => {
    document.body.dataset.fontZone = zone;

    return () => {
      if (document.body.dataset.fontZone === zone) {
        delete document.body.dataset.fontZone;
      }
    };
  }, [zone]);

  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: fontVariable,
        },
      }}
    >
      <div className={scopeClass}>{children}</div>
    </ConfigProvider>
  );
}
