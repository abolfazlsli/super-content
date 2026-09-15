"use client";

import { Pagination } from "antd";

interface ContentsPaginationProps {
  current: number;
  pageSize: number;
  total: number;
  onChange: (page: number, pageSize: number) => void;
}

export default function ContentsPagination({
  current,
  pageSize,
  total,
  onChange,
}: ContentsPaginationProps) {
  if (total <= pageSize) {
    return null;
  }

  return (
    <div className="mt-8 flex justify-center" dir="rtl">
      <div dir="ltr">
        <Pagination
          current={current}
          pageSize={pageSize}
          total={total}
          onChange={onChange}
          showSizeChanger={false}
          showQuickJumper={false}
          responsive
          hideOnSinglePage
          className="contentsPagination"
        />
      </div>
    </div>
  );
}
