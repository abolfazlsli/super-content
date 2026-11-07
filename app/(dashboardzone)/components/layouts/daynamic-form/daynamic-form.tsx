"use client";

import {
    Button,
    Form,
    Input,
    InputNumber,
    Select,
    Switch,
    Typography,
    Upload,
    message,
} from "antd";
import {
    CheckOutlined,
    FileTextOutlined,
    UploadOutlined,
} from "@ant-design/icons";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
    createEntry,
    EntryFieldValue,
    getEntryPlacements,
    sendEntryData,
    uploadFile,
} from "../../../../../src/services/fields";
import { TaxonomyGroup, useTaxonomy } from "../../../../../src/services/taxonomy";

interface FieldOption {
    id: string;
    value: string;
    label: string;
    order: number;
    is_active?: boolean;
}

interface Field {
    order: number;
    required: boolean;
    fild: {
        id: string;
        name: string;
        type_of: "str" | "int" | "bool" | "file" | "select" | "multiselect";
        options: FieldOption[];
    };
}

interface Instance {
    id: string;
    name: string;
    caption: string | null;
}

interface DynamicFormProps {
    instance: Instance;
    fields: Field[];
}

type EntryType = "free" | "free_users" | "paid";

const BODY_PLACEMENT = "body";
const UNIQUE_PLACEMENTS = ["title", "caption", "badge", "banner"];

const inputClassName =
    "h-13 rounded-2xl! border-slate-200! bg-slate-50! px-4! text-sm! shadow-none! transition-all hover:border-(--primary)! focus:border-(--primary)! focus:bg-white!";

/* جایگاه پیش‌فرض هر فیلد: اولین متن عنوان، دومی کپشن، اولین انتخابی بج، اولین فایل بنر */
const guessPlacements = (fields: Field[]) => {
    const used = new Set<string>();
    const result: Record<string, string> = {};

    const take = (key: string) => {
        if (used.has(key)) return null;
        used.add(key);
        return key;
    };

    fields.forEach(({ fild }) => {
        let placement: string | null = null;

        if (fild.type_of === "str") placement = take("title") ?? take("caption");
        if (fild.type_of === "select") placement = take("badge");
        if (fild.type_of === "file") placement = take("banner");

        result[fild.id] = placement ?? BODY_PLACEMENT;
    });

    return result;
};

const isEmptyValue = (value: unknown) =>
    value === undefined ||
    value === null ||
    value === "" ||
    (Array.isArray(value) && value.length === 0);

/* گزینه‌های گروه‌بندی شده : گروه ← دسته‌بندی‌ها */
const groupedOptions = (groups: TaxonomyGroup[]) =>
    groups.map((group) => ({
        label: group.name,
        title: group.name,
        options: group.categories.map((category) => ({
            value: category.id,
            label: category.name,
        })),
    }));

const filterByLabel = (input: string, option?: { label?: unknown }) =>
    String(option?.label ?? "").includes(input);

export default function DynamicForm({
    instance,
    fields,
}: DynamicFormProps) {
    const [form] = Form.useForm();
    const router = useRouter();

    const [placements, setPlacements] = useState<{ key: string; value: string }[]>([]);
    const taxonomy = useTaxonomy();
    const [uploading, setUploading] = useState<Record<string, boolean>>({});
    const [submitting, setSubmitting] = useState(false);
    // اگه ساخت entry موفق بود ولی ارسال دیتا خطا داد، دوباره entry نمی‌سازیم
    const [createdEntryId, setCreatedEntryId] = useState<string | null>(null);

    const entryType: EntryType = Form.useWatch("entry_type", form) ?? "free";

    const sortedFields = useMemo(
        () => [...fields].sort((a, b) => a.order - b.order),
        [fields]
    );

    const placementOptions = useMemo(
        () => [
            ...placements.map((item) => ({ value: item.key, label: item.value })),
            { value: BODY_PLACEMENT, label: "محتوای اصلی" },
        ],
        [placements]
    );

    // بنر فقط برای فیلد فایل ؛ فیلد فایل فقط بنر یا محتوای اصلی
    const placementOptionsFor = (typeOf: Field["fild"]["type_of"]) =>
        placementOptions.filter((option) =>
            typeOf === "file"
                ? option.value === "banner" || option.value === BODY_PLACEMENT
                : option.value !== "banner"
        );

    useEffect(() => {
        getEntryPlacements().then((res) => {
            if (res.sucsess) setPlacements(res.data.data.result);
        });
    }, []);

    useEffect(() => {
        const defaults = guessPlacements(sortedFields);

        form.setFieldsValue({
            entry_type: "free",
            placement: defaults,
        });
    }, [sortedFields, form]);

    const handleUpload = async (fildId: string, file: File) => {
        setUploading((prev) => ({ ...prev, [fildId]: true }));

        const res = await uploadFile(file);

        setUploading((prev) => ({ ...prev, [fildId]: false }));

        if (!res.sucsess) {
            message.error("آپلود فایل انجام نشد");
            return;
        }

        form.setFieldValue(["values", fildId], res.data.data.id);
        form.setFieldValue(["fileNames", fildId], file.name);
        message.success("فایل آپلود شد");
    };

    const renderField = (field: Field) => {
        const { fild } = field;

        const activeOptions = [...(fild.options ?? [])]
            .filter((option) => option.is_active !== false)
            .sort((a, b) => a.order - b.order)
            .map((option) => ({
                value: option.id,
                label: option.label,
            }));

        switch (fild.type_of) {
            case "str":
                return (
                    <Input
                        size="large"
                        placeholder={`وارد کردن ${fild.name}`}
                        className={inputClassName}
                    />
                );

            case "int":
                return (
                    <InputNumber
                        size="large"
                        precision={0}
                        placeholder={`وارد کردن ${fild.name}`}
                        className="h-13 w-full! rounded-2xl! border-slate-200! bg-slate-50!"
                    />
                );

            case "bool":
                return <Switch checkedChildren="بله" unCheckedChildren="خیر" />;

            case "select":
                return (
                    <Select
                        size="large"
                        allowClear
                        placeholder={`انتخاب ${fild.name}`}
                        className="h-13 w-full"
                        options={activeOptions}
                    />
                );

            case "multiselect":
                return (
                    <Select
                        size="large"
                        mode="multiple"
                        allowClear
                        placeholder={`انتخاب ${fild.name}`}
                        className="min-h-13 w-full"
                        options={activeOptions}
                    />
                );

            case "file":
                return (
                    <Input
                        readOnly
                        size="large"
                        placeholder="فایلی انتخاب نشده"
                        className={inputClassName}
                    />
                );

            default:
                return (
                    <Input
                        size="large"
                        placeholder={`وارد کردن ${fild.name}`}
                        className={inputClassName}
                    />
                );
        }
    };

    const handleSubmit = async (formValues: {
        entry_type: EntryType;
        price?: number;
        grade_ids?: string[];
        subject_ids?: string[];
        type_id?: string;
        values?: Record<string, unknown>;
        placement?: Record<string, string>;
    }) => {
        const values = formValues.values ?? {};
        const placement = formValues.placement ?? {};

        const filds: EntryFieldValue[] = sortedFields
            .filter(({ fild }) => !isEmptyValue(values[fild.id]))
            .map(({ fild }) => ({
                fild_id: fild.id,
                data: {
                    value: values[fild.id] as EntryFieldValue["data"]["value"],
                    placement: placement[fild.id] || BODY_PLACEMENT,
                },
            }));

        if (!filds.length) {
            message.warning("حداقل یک فیلد را تکمیل کنید");
            return;
        }

        // عنوان، کپشن، بج و بنر فقط یک بار
        const duplicated = UNIQUE_PLACEMENTS.find(
            (key) => filds.filter((item) => item.data.placement === key).length > 1
        );
        if (duplicated) {
            const label = placementOptions.find((option) => option.value === duplicated)?.label ?? duplicated;
            message.warning(`جایگاه «${label}» فقط برای یک فیلد قابل انتخاب است`);
            return;
        }

        if (!filds.some((item) => item.data.placement === "title")) {
            message.warning("یکی از فیلدها را به عنوان «موضوع» (عنوان) انتخاب کنید");
            return;
        }

        setSubmitting(true);

        try {
            let entryId = createdEntryId;

            if (!entryId) {
                const entryRes = await createEntry({
                    instance_id: instance.id,
                    entry_type: formValues.entry_type,
                    price: formValues.entry_type === "paid" ? formValues.price : 0,
                    categorys: [
                        ...(formValues.grade_ids ?? []),
                        ...(formValues.subject_ids ?? []),
                        ...(formValues.type_id ? [formValues.type_id] : []),
                    ],
                });

                if (!entryRes.sucsess) {
                    message.error("ثبت محتوا انجام نشد");
                    return;
                }

                entryId = entryRes.data.data.result.entry_id;
                setCreatedEntryId(entryId);
            }

            const dataRes = await sendEntryData({ entry_id: entryId, filds });

            if (!dataRes.sucsess) {
                const errors = (dataRes.data as any)?.response?.data?.errors as
                    | { fild_id: string | null; result: string }[]
                    | undefined;

                if (errors?.length) {
                    const names = errors
                        .map(
                            (error) =>
                                sortedFields.find((f) => f.fild.id === error.fild_id)?.fild.name ??
                                error.result
                        )
                        .join("، ");
                    message.error(`مقدار این فیلدها نامعتبر است: ${names}`);
                } else {
                    message.error("ذخیره اطلاعات محتوا انجام نشد");
                }
                return;
            }

            message.success("محتوا ثبت شد و پس از تایید مدیر نمایش داده می‌شود");
            router.push("/dashboard/my-content");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div
            dir="rtl"
            className="min-h-screen bg-[#f7f9fc] px-4 py-6 md:px-8 md:py-10"
        >
            <div className="mx-auto max-w-5xl">
                {/* Main Card */}
                <div className="overflow-hidden rounded-[32px] border border-slate-100 bg-white shadow-[0_10px_50px_rgba(15,23,42,0.06)]">

                    {/* Header */}
                    <div className="relative overflow-hidden border-b border-slate-100 px-6 py-8 md:px-10 md:py-10">

                        {/* Decorative circle */}
                        <div
                            className="
                                pointer-events-none
                                absolute
                                -left-20
                                -top-24
                                h-64
                                w-64
                                rounded-full
                                bg-(--primary-light)
                                opacity-70
                                blur-3xl
                            "
                        />

                        <div className="relative flex items-start gap-5">
                            {/* Icon */}
                            <div
                                className="
                                    flex
                                    h-16
                                    w-16
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-[22px]
                                    bg-(--primary-light)
                                    text-2xl
                                    text-(--primary)
                                "
                            >
                                <FileTextOutlined />
                            </div>

                            <div>
                                <div className="mb-2 flex items-center gap-2">
                                    <span className="h-1.5 w-1.5 rounded-full bg-(--primary)" />

                                    <span className="text-xs font-bold text-(--primary)">
                                        تکمیل اطلاعات
                                    </span>
                                </div>

                                <Typography.Title
                                    level={2}
                                    className="mb-2! text-2xl! font-extrabold! tracking-tight! text-slate-800!"
                                >
                                    {instance.name}
                                </Typography.Title>

                                {instance.caption && (
                                    <Typography.Text className="text-sm! text-slate-400!">
                                        {instance.caption}
                                    </Typography.Text>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="px-6 py-8 md:px-10 md:py-10">
                        <Form
                            form={form}
                            layout="vertical"
                            onFinish={handleSubmit}
                            requiredMark={false}
                        >
                            {/* تنظیمات محتوا */}
                            <div className="mb-8 grid grid-cols-1 gap-x-8 gap-y-2 rounded-3xl bg-slate-50 p-5 md:grid-cols-3">
                                <Form.Item
                                    name="entry_type"
                                    label={<span className="text-sm font-bold text-slate-700">نوع دسترسی</span>}
                                    className="mb-3!"
                                >
                                    <Select
                                        size="large"
                                        disabled={!!createdEntryId}
                                        options={[
                                            { value: "free", label: "رایگان" },
                                            { value: "free_users", label: "رایگان برای کاربران" },
                                            { value: "paid", label: "پولی" },
                                        ]}
                                    />
                                </Form.Item>

                                {entryType === "paid" && (
                                    <Form.Item
                                        name="price"
                                        label={<span className="text-sm font-bold text-slate-700">قیمت (تومان)</span>}
                                        className="mb-3!"
                                        rules={[{ required: true, message: "قیمت الزامی است" }]}
                                    >
                                        <InputNumber
                                            size="large"
                                            min={1}
                                            disabled={!!createdEntryId}
                                            className="w-full!"
                                        />
                                    </Form.Item>
                                )}

                                <Form.Item
                                    name="type_id"
                                    label={<span className="text-sm font-bold text-slate-700">نوع محتوا</span>}
                                    className="mb-3!"
                                    rules={[{ required: true, message: "نوع محتوا را انتخاب کنید" }]}
                                >
                                    <Select
                                        size="large"
                                        allowClear
                                        disabled={!!createdEntryId}
                                        loading={taxonomy.loading}
                                        placeholder="انتخاب نوع محتوا"
                                        options={taxonomy.types.map((category) => ({
                                            value: category.id,
                                            label: category.name,
                                        }))}
                                    />
                                </Form.Item>

                                <Form.Item
                                    name="grade_ids"
                                    label={<span className="text-sm font-bold text-slate-700">پایه تحصیلی</span>}
                                    className="mb-3!"
                                    rules={[{ required: true, message: "حداقل یک پایه را انتخاب کنید" }]}
                                >
                                    <Select
                                        size="large"
                                        mode="multiple"
                                        allowClear
                                        disabled={!!createdEntryId}
                                        loading={taxonomy.loading}
                                        placeholder="انتخاب پایه"
                                        showSearch
                                        filterOption={filterByLabel}
                                        options={groupedOptions(taxonomy.grades)}
                                    />
                                </Form.Item>

                                <Form.Item
                                    name="subject_ids"
                                    label={<span className="text-sm font-bold text-slate-700">درس</span>}
                                    className={`mb-3! ${entryType === "paid" ? "md:col-span-3" : "md:col-span-2"}`}
                                    rules={[{ required: true, message: "حداقل یک درس را انتخاب کنید" }]}
                                >
                                    <Select
                                        size="large"
                                        mode="multiple"
                                        allowClear
                                        disabled={!!createdEntryId}
                                        loading={taxonomy.loading}
                                        placeholder="انتخاب درس"
                                        showSearch
                                        filterOption={filterByLabel}
                                        options={groupedOptions(taxonomy.subjects)}
                                    />
                                </Form.Item>
                            </div>

                            <div className="grid grid-cols-1 gap-x-8 gap-y-2 md:grid-cols-2">
                                {sortedFields.map(
                                    (field, index) => (
                                        <div key={field.fild.id} className="mb-5">
                                            <div className="mb-2 flex items-center justify-between gap-2">
                                                <div className="flex items-center gap-2">
                                                    <span
                                                        className="
                                                            flex
                                                            h-6
                                                            w-6
                                                            items-center
                                                            justify-center
                                                            rounded-lg
                                                            bg-slate-100
                                                            text-[10px]
                                                            font-bold
                                                            text-slate-400
                                                        "
                                                    >
                                                        {String(
                                                            index + 1
                                                        ).padStart(
                                                            2,
                                                            "0"
                                                        )}
                                                    </span>

                                                    <span className="text-sm font-bold text-slate-700">
                                                        {
                                                            field
                                                                .fild
                                                                .name
                                                        }
                                                    </span>

                                                    {field.required && (
                                                        <span className="text-xs font-bold text-red-400">
                                                            *
                                                        </span>
                                                    )}
                                                </div>

                                                <Form.Item
                                                    name={["placement", field.fild.id]}
                                                    noStyle
                                                >
                                                    <Select
                                                        size="small"
                                                        variant="borderless"
                                                        className="min-w-28 text-xs"
                                                        options={placementOptionsFor(field.fild.type_of)}
                                                    />
                                                </Form.Item>
                                            </div>

                                            <div className="flex items-start gap-2">
                                                <Form.Item
                                                    name={
                                                        field.fild.type_of === "file"
                                                            ? ["fileNames", field.fild.id]
                                                            : ["values", field.fild.id]
                                                    }
                                                    valuePropName={
                                                        field.fild.type_of === "bool"
                                                            ? "checked"
                                                            : "value"
                                                    }
                                                    className="mb-0! flex-1"
                                                    rules={
                                                        field.required
                                                            ? [
                                                                  {
                                                                      required:
                                                                          true,
                                                                      message: `${field.fild.name} الزامی است`,
                                                                  },
                                                              ]
                                                            : []
                                                    }
                                                >
                                                    {renderField(
                                                        field
                                                    )}
                                                </Form.Item>

                                                {field.fild.type_of === "file" && (
                                                    <>
                                                        <Form.Item name={["values", field.fild.id]} hidden>
                                                            <Input />
                                                        </Form.Item>
                                                        <Upload
                                                            showUploadList={false}
                                                            beforeUpload={(file) => {
                                                                handleUpload(field.fild.id, file);
                                                                return false;
                                                            }}
                                                        >
                                                            <Button
                                                                size="large"
                                                                icon={<UploadOutlined />}
                                                                loading={!!uploading[field.fild.id]}
                                                                className="h-13! rounded-2xl!"
                                                            >
                                                                آپلود
                                                            </Button>
                                                        </Upload>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    )
                                )}
                            </div>

                            {/* Footer */}
                            <div className="mt-8 flex flex-col-reverse items-center justify-between gap-4 border-t border-slate-100 pt-7 sm:flex-row">
                                <div className="text-xs text-slate-400">
                                    <span className="text-red-400">
                                        *
                                    </span>{" "}
                                    تکمیل فیلدهای ستاره‌دار الزامی است
                                </div>

                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    size="large"
                                    loading={submitting}
                                    icon={<CheckOutlined />}
                                    className="
                                        h-13!
                                        min-w-40
                                        rounded-2xl!
                                        border-0!
                                        px-7!
                                        text-sm!
                                        font-bold!
                                        shadow-[0_8px_20px_rgba(0,0,0,0.10)]!
                                        transition-all!
                                        hover:-translate-y-0.5!
                                    "
                                >
                                    ذخیره اطلاعات
                                </Button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
}
