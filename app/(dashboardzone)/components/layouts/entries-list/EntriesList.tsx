'use client'

import { Empty, Pagination, Skeleton, Tag } from "antd";
import Link from "next/link";
import { FileText } from "lucide-react";
import { ContentItem } from "../../../../../src/services/contents";

export const STATUS_META: Record<string, { label: string; color: string }> = {
    active: { label: "تایید شده", color: "green" },
    pendding: { label: "در انتظار تایید", color: "orange" },
    disactive: { label: "رد شده", color: "red" },
};

const ENTRY_TYPE_LABEL: Record<string, string> = {
    free: "رایگان",
    free_users: "رایگان برای کاربران",
    paid: "پولی",
};

const formatPrice = (value: number) =>
    `${new Intl.NumberFormat("fa-IR").format(value)} تومان`;

type EntriesListProps = {
    items: (ContentItem & { status?: string })[];
    loading: boolean;
    total: number;
    page: number;
    pageSize: number;
    onPageChange: (page: number) => void;
    emptyText: string;
    showStatus?: boolean;
    linkable?: boolean;
    renderActions?: (item: ContentItem & { status?: string }) => React.ReactNode;
};

export const EntriesList = ({
    items,
    loading,
    total,
    page,
    pageSize,
    onPageChange,
    emptyText,
    showStatus = false,
    linkable = true,
    renderActions,
}: EntriesListProps) => {
    if (loading) {
        return <Skeleton active paragraph={{ rows: 6 }} />;
    }

    if (!items.length) {
        return <Empty description={emptyText} className="py-10" />;
    }

    return (
        <div dir="rtl" className="flex w-full flex-col gap-3">
            {items.map((item) => {
                const body = (
                    <div className="flex min-w-0 flex-1 items-center gap-4">
                        {item.bannerUrl ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                                src={item.bannerUrl}
                                alt={item.title}
                                className="h-14 w-14 shrink-0 rounded-2xl object-cover"
                            />
                        ) : (
                            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-(--primary-light) text-(--primary)">
                                <FileText size={22} />
                            </div>
                        )}

                        <div className="min-w-0 flex-1">
                            <div className="mb-1 flex flex-wrap items-center gap-1.5">
                                <Tag color="blue" className="m-0!">{item.type}</Tag>
                                {item.categories.map((category) => (
                                    <Tag key={category.id} className="m-0!">{category.name}</Tag>
                                ))}
                                {showStatus && item.status && (
                                    <Tag color={STATUS_META[item.status]?.color} className="m-0!">
                                        {STATUS_META[item.status]?.label ?? item.status}
                                    </Tag>
                                )}
                            </div>

                            <h3 className="truncate text-sm font-bold text-slate-800">
                                {item.title}
                            </h3>

                            <p className="mt-1 truncate text-xs text-slate-400">
                                {[item.author, item.updatedAt].filter(Boolean).join(" · ")}
                            </p>
                        </div>

                        <div className="shrink-0 text-left text-xs font-bold text-(--primary)">
                            {item.entryType === "paid"
                                ? formatPrice(item.price)
                                : ENTRY_TYPE_LABEL[item.entryType]}
                        </div>
                    </div>
                );

                return (
                    <div
                        key={item.id}
                        className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-3 transition-shadow hover:shadow-cu max-md:flex-col max-md:items-stretch"
                    >
                        {linkable ? (
                            <Link href={item.href} className="flex min-w-0 flex-1">
                                {body}
                            </Link>
                        ) : (
                            body
                        )}

                        {renderActions && (
                            <div className="flex shrink-0 items-center gap-2 max-md:justify-end">
                                {renderActions(item)}
                            </div>
                        )}
                    </div>
                );
            })}

            {total > pageSize && (
                <div className="flex justify-center pt-2">
                    <Pagination
                        current={page}
                        pageSize={pageSize}
                        total={total}
                        onChange={onPageChange}
                        showSizeChanger={false}
                    />
                </div>
            )}
        </div>
    );
};
