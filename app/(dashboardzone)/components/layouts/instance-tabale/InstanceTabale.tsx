'use client'

import { useEffect, useState } from "react";
import { Button, Popconfirm, Popover, Table, Typography, message } from "antd";
import type { ColumnsType } from "antd/es/table";
import { archiveInstance, getInstancese } from "../../../../../src/services/fields";
import { Menu, Space } from "lucide-react";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";


const { Text } = Typography;

const PAGE_SIZE = 30;

export type Instance = {
  id: string;
  name: string;
  caption: string | null;
};

export const InstanceTabale = () => {
  const [data, setData] = useState<Instance[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleGetInstances = async () => {
    setLoading(true);
    try {
      const res = await getInstancese({
        size: PAGE_SIZE,
        offset: (page - 1) * PAGE_SIZE,
      });

      if (res.sucsess) {
        setData(res.data.data.result);
        setTotal(res.data.data.total);
      } else {
        message.error("دریافت لیست با خطا مواجه شد");
      }
    } catch {
      message.error("خطا در ارتباط با سرور");
    } finally {
      setLoading(false);
    }
  };
  const handleRemove = async (id : string) => {
    const res = await archiveInstance(id)
    if (res.sucsess) {
        message.success("فیلد شما حذف شد بعدا میتوانید از قسمت آرشیو ها به ان درسترسی داشته باشید")
        handleGetInstances()
    }
  }
  useEffect(() => {
    handleGetInstances();
  }, [page]);

  const columns: ColumnsType<Instance> = [
    {
      title: "ردیف",
      key: "index",
      width: 80,
      align: "center",
      render: (_, __, index) => (page - 1) * PAGE_SIZE + index + 1,
    },
    {
      title: "نام",
      dataIndex: "name",
      key: "name",
      render: (name: string) => <Text strong>{name}</Text>,
    },
    {
      title: "کپشن",
      dataIndex: "caption",
      key: "caption",
      ellipsis: true,
      render: (caption: string | null) =>
        caption ? caption : <Text type="secondary">—</Text>,
    },
    {
      title: "عملیات",
      dataIndex: "id",
      key: "id",
      width: 220,
      render: (_ , record) => (
        <>
        <Popover trigger={"click"} content={
            <>
          <Button
            type="text"
            block
            icon={<EditOutlined />}
            className="justify-start!"
          >
            ویرایش
          </Button>

          <Popconfirm
            title="حذف محتوا"
            description={`آیا از حذف «${record.name}» مطمئن هستید؟`}
            okText="حذف"
            cancelText="انصراف"
            onConfirm={() => handleRemove(record.id)}
            okButtonProps={{ danger: true }}
          >
            <Button
              type="text"
              danger
              block
              icon={<DeleteOutlined />}
              className="justify-start!"
            >
              حذف
            </Button>
          </Popconfirm>
          </>
        }>
            <Button type="text">
                <Menu className="w-5 h-5 text-gray-600" />
            </Button>
        </Popover>
        </>        
      ),
    },
  ];

  return (
    <div dir="rtl">
      <Table<Instance>
        rowKey="id"
        columns={columns}
        dataSource={data}
        loading={loading}
        pagination={{
          current: page,
          pageSize: PAGE_SIZE,
          total,
          showSizeChanger: false,
          hideOnSinglePage: true,
          onChange: (p) => setPage(p),
        }}
        locale={{ emptyText: "موردی یافت نشد" }}
        scroll={{ x: "max-content" }}
      />
    </div>
  );
};