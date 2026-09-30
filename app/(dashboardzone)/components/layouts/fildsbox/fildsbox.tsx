'use client'

import { useEffect, useMemo, useState } from "react";
import {
  Button,
  Card,
  Checkbox,
  Empty,
  Form,
  Input,
  Modal,
  Pagination,
  Space,
  Spin,
  Tag,
  Typography,
  message,
} from "antd";
import {
  CheckCircleFilled,
  ClearOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { createInstance, getFields } from "../../../../../src/services/fields";

const { Text } = Typography;

const PAGE_SIZE = 30;

type ContentFormValues = {
  name: string;
  caption?: string;
};

export type FieldOption = {
  label: string;
  value: string;
  order: number;
};

export type Field = {
  id: string;
  name: string;
  type_of: "str" | "int" | "bool" | "select" | "multiselect" | "file";
  options: FieldOption[];
};

const TYPE_META: Record<Field["type_of"], { label: string; color: string }> = {
  str: { label: "متن", color: "blue" },
  int: { label: "عدد", color: "geekblue" },
  bool: { label: "بله/خیر", color: "purple" },
  select: { label: "انتخابی", color: "cyan" },
  multiselect: { label: "چندانتخابی", color: "green" },
  file: { label: "فایل", color: "orange" },
};

export const FieldsBox = () => {
  const [fields, setFields] = useState<Field[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form] = Form.useForm<ContentFormValues>();

  // کل آبجکت فیلدهای انتخاب‌شده (بین صفحه‌ها حفظ می‌شود)
  const [selectedMap, setSelectedMap] = useState<Record<string, Field>>({});

  const handleGetFields = async () => {
    setLoading(true);
    try {
      // صفحه ۱ => offset 0 | صفحه ۲ => offset 30 | صفحه ۳ => offset 60
      const res = await getFields({
        size: PAGE_SIZE,
        offset: (page - 1) * PAGE_SIZE,
      });

      if (res.sucsess) {
        setFields(res.data.data.result);
        setTotal(res.data.data.total); // مطابق پاسخ API خودتان تنظیم کنید
      } else {
        message.error("دریافت فیلدها با خطا مواجه شد");
      }
    } catch {
      message.error("خطا در ارتباط با سرور");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleGetFields();
  }, [page]);

  const handleToggleField = (field: Field) => {
    setSelectedMap((prev) => {
      const next = { ...prev };
      if (next[field.id]) {
        delete next[field.id];
      } else {
        next[field.id] = field;
      }
      return next;
    });
  };

  const handleClearAll = () => setSelectedMap({});
  const handleOpenModal = () => setIsModalOpen(true);

const handleCloseModal = () => {
  setIsModalOpen(false);
  form.resetFields();
};

const handleSubmit = async (values: ContentFormValues) => {
  setSubmitting(true);
  try {
    const payload = {
      name: values.name.trim(),
      caption: values.caption?.trim() || undefined,
      filds: selectedItems.map((f) => f.id),
    };

    const res = await createInstance(payload)

    message.success("محتوا با موفقیت ثبت شد");
    handleCloseModal();
    handleClearAll();
  } catch {
    message.error("خطا در ثبت محتوا");
  } finally {
    setSubmitting(false);
  }
};
  const selectedItems = useMemo(() => Object.values(selectedMap), [selectedMap]);

  // جستجو فقط روی همین صفحه است
  const filteredFields = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return fields;
    return fields.filter((f) => f.name.toLowerCase().includes(q));
  }, [fields, search]);

  return (
    <div dir="rtl" className="flex flex-col gap-4">
                <Modal
                    title="ثبت محتوا"
                    open={isModalOpen}
                    onCancel={handleCloseModal}
                    onOk={() => form.submit()}
                    okText="ثبت"
                    cancelText="انصراف"
                    confirmLoading={submitting}
                    destroyOnHidden
                    centered
                    >
                    <div className="mb-4 flex flex-wrap items-center gap-1">
                        <Text type="secondary">فیلدهای انتخاب‌شده:</Text>
                        <Tag color="processing">{selectedItems.length}</Tag>
                    </div>

                    <Form<ContentFormValues>
                        form={form}
                        layout="vertical"
                        onFinish={handleSubmit}
                        requiredMark="optional"
                    >
                        <Form.Item
                        name="name"
                        label="نام محتوا"
                        rules={[
                            { required: true, whitespace: true, message: "نام محتوا را وارد کنید" },
                            { max: 100, message: "حداکثر ۱۰۰ کاراکتر" },
                        ]}
                        >
                        <Input placeholder="مثلاً: فرم ثبت‌نام" size="large" autoFocus />
                        </Form.Item>

                        <Form.Item
                        name="caption"
                        label="کپشن (اختیاری)"
                        rules={[{ max: 300, message: "حداکثر ۳۰۰ کاراکتر" }]}
                        >
                        <Input.TextArea
                            rows={3}
                            showCount
                            maxLength={300}
                            placeholder="توضیح کوتاه درباره‌ی این محتوا..."
                        />
                        </Form.Item>
                    </Form>
                    </Modal>
      {/* نوار انتخاب‌شده‌ها */}
      <div className="sticky top-0 z-10 rounded-xl border border-gray-200 bg-white/90 p-3 shadow-sm backdrop-blur">
        <div className="mb-2 flex items-center justify-between">
          <Space>
            <Text strong>فیلدهای انتخاب‌شده</Text>
            <Tag color={selectedItems.length ? "processing" : "default"}>
              {selectedItems.length}
            </Tag>
          </Space>
          <div className="">
            <Button
                size="small"
                type="text"
                danger
                icon={<ClearOutlined />}
                disabled={!selectedItems.length}
                onClick={handleClearAll}
            >
                پاک کردن همه
            </Button>
            <Button
                type="primary"
                onClick={handleOpenModal}
                className="mr-2!"
                disabled={!selectedItems.length}
                >
                تایید
            </Button>
          </div>
        </div>

        {selectedItems.length ? (
          <div className="flex max-h-24 flex-wrap gap-2 overflow-y-auto">
            {selectedItems.map((f) => (
              <Tag
                key={f.id}
                closable
                
                color={TYPE_META[f.type_of].color}
                onClick={(e) => {
                  e.preventDefault();
                  handleToggleField(f);
                }}
                className="m-0! px-2! py-1! cursor-pointer!"
              >
                {f.name}
              </Tag>
            ))}
          </div>
        ) : (
          <Text type="secondary">هنوز هیچ فیلدی انتخاب نکرده‌اید</Text>
        )}
      </div>

      {/* جستجو */}
      <Input
        allowClear
        size="large"
        prefix={<SearchOutlined />}
        placeholder="جستجو در فیلدهای این صفحه..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* لیست فیلدها */}
      <Spin spinning={loading}>
        {filteredFields.length ? (
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {filteredFields.map((field) => {
              const checked = !!selectedMap[field.id];
              const meta = TYPE_META[field.type_of];

              return (
                <Card
                  key={field.id}
                  size="small"
                  hoverable
                  onClick={() => handleToggleField(field)}
                  className="cursor-pointer transition-all"
                  style={{
                    borderColor: checked ? "#1677ff" : undefined,
                    background: checked ? "#e6f4ff" : undefined,
                  }}
                >
                  <div className="flex items-center gap-3">
                    <Checkbox
                      checked={checked}
                      onClick={(e) => e.stopPropagation()}
                      onChange={() => handleToggleField(field)}
                    />

                    <div className="flex flex-1 flex-col gap-1">
                      <Text strong>{field.name}</Text>
                      <Space size={4}>
                        <Tag color={meta.color} className="m-0!">
                          {meta.label}
                        </Tag>
                        {field.options?.length > 0 && (
                          <Text type="secondary" className="text-xs">
                            {field.options.length} گزینه
                          </Text>
                        )}
                      </Space>
                    </div>

                    {checked && (
                      <CheckCircleFilled style={{ color: "#1677ff", fontSize: 18 }} />
                    )}
                  </div>
                </Card>
              );
            })}
          </div>
        ) : (
          !loading && <Empty description="فیلدی پیدا نشد" className="py-10" />
        )}
      </Spin>

      {/* صفحه‌بندی */}
      {total > PAGE_SIZE && (
        <div className="flex justify-center p-5" dir="ltr">
          <Pagination
            current={page}
            pageSize={PAGE_SIZE}
            total={total}
            showSizeChanger={false}
            onChange={(p) => setPage(p)}
          />
        </div>
      )}
    </div>
  );
};