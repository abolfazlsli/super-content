"use client";

import {
    BookOutlined,
    FileTextOutlined,
    RightOutlined,
} from "@ant-design/icons";
import { Card, Empty, Skeleton } from "antd";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getInstancese } from "../../../../../src/services/fields";

export default function Page() {
    const [pageData, setPageData] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    const handleGetPageData = async () => {
        try {
            const res = await getInstancese({
                offset: 0,
                size: 30,
            });

            if (res.sucsess) {
                setPageData(res.data.data.result);
            }
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        handleGetPageData();
    }, []);

    return (
        <div
            dir="rtl"
            className="min-h-full w-full bg-[#f8fafc] p-6 md:p-8"
        >
            {/* Header */}
            <div className="mb-8">
                <div className="flex items-end justify-between">
                    <div>
                        <div className="mb-3 flex items-center gap-3">
                            <div className="h-2 w-2 rounded-full bg-(--primary)" />

                            <span className="text-sm font-semibold text-(--primary)">
                                محتوای آموزشی
                            </span>
                        </div>

                        <h1 className="text-3xl font-extrabold tracking-tight text-slate-800">
                            دسته‌بندی محتوا
                        </h1>

                        <p className="mt-2 text-sm text-slate-500">
                            نوع محتوایی که می‌خواهید مدیریت کنید را انتخاب کنید.
                        </p>
                    </div>

                    {!loading && pageData.length > 0 && (
                        <div className="hidden rounded-2xl border border-slate-200 bg-white px-5 py-3 shadow-sm md:block">
                            <span className="text-xs text-slate-400">
                                تعداد دسته‌بندی
                            </span>

                            <div className="mt-1 text-xl font-bold text-slate-800">
                                {pageData.length}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Loading */}
            {loading ? (
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <Card
                            key={index}
                            bordered={false}
                            className="rounded-[28px]!"
                        >
                            <Skeleton
                                active
                                paragraph={{ rows: 3 }}
                            />
                        </Card>
                    ))}
                </div>
            ) : pageData.length === 0 ? (
                <div className="flex min-h-80 items-center justify-center rounded-[32px] bg-white">
                    <Empty description="دسته‌بندی‌ای وجود ندارد" />
                </div>
            ) : (
                /* Cards */
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {pageData.map((item, index) => {
                        const isFile = item.name.includes("جزوه");

                        return (
                            <Link
                                key={item.id}
                                href={`/dashboard/instance-form/${item.id}`}
                                className="group block"
                            >
                                <Card
                                    bordered={false}
                                    className="
                                        relative
                                        h-full
                                        overflow-hidden
                                        rounded-[28px]!
                                        bg-white!
                                        shadow-[0_4px_25px_rgba(15,23,42,0.04)]!
                                        transition-all
                                        duration-500
                                        hover:-translate-y-1.5
                                        hover:shadow-[0_18px_45px_rgba(15,23,42,0.10)]!
                                    "
                                    styles={{
                                        body: {
                                            padding: 0,
                                        },
                                    }}
                                >
                                    {/* Decorative background */}
                                    <div
                                        className="
                                            pointer-events-none
                                            absolute
                                            -right-16
                                            -top-16
                                            h-40
                                            w-40
                                            rounded-full
                                            bg-(--primary-light)
                                            opacity-60
                                            blur-2xl
                                            transition-all
                                            duration-500
                                            group-hover:scale-125
                                            group-hover:opacity-90
                                        "
                                    />

                                    {/* Top accent */}
                                    <div
                                        className="
                                            absolute
                                            right-0
                                            top-0
                                            h-1
                                            w-0
                                            bg-(--primary)
                                            transition-all
                                            duration-500
                                            group-hover:w-full
                                        "
                                    />

                                    <div className="relative flex min-h-[250px] flex-col p-6">
                                        {/* Top */}
                                        <div className="flex items-start justify-between">
                                            {/* Icon */}
                                            <div
                                                className="
                                                    flex
                                                    h-14
                                                    w-14
                                                    items-center
                                                    justify-center
                                                    rounded-[20px]
                                                    bg-(--primary-light)
                                                    text-2xl
                                                    text-(--primary)
                                                    transition-all
                                                    duration-500
                                                    group-hover:scale-110
                                                    group-hover:rotate-3
                                                "
                                            >
                                                {isFile ? (
                                                    <FileTextOutlined />
                                                ) : (
                                                    <BookOutlined />
                                                )}
                                            </div>

                                            {/* Number */}
                                            <div
                                                className="
                                                    flex
                                                    h-8
                                                    min-w-8
                                                    items-center
                                                    justify-center
                                                    rounded-full
                                                    bg-slate-50
                                                    px-2
                                                    text-[11px]
                                                    font-bold
                                                    text-slate-400
                                                    transition-all
                                                    group-hover:bg-(--primary-light)
                                                    group-hover:text-(--primary)
                                                "
                                            >
                                                {String(index + 1).padStart(
                                                    2,
                                                    "0"
                                                )}
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="mt-auto pt-12">
                                            <h2
                                                className="
                                                    text-xl
                                                    font-extrabold
                                                    tracking-tight
                                                    text-slate-800
                                                    transition-colors
                                                    duration-300
                                                    group-hover:text-(--primary)
                                                "
                                            >
                                                {item.name}
                                            </h2>

                                            <p className="mt-2 min-h-5 text-sm text-slate-400">
                                                {item.caption ||
                                                    "مشاهده و مدیریت محتوا"}
                                            </p>
                                        </div>

                                        {/* Bottom */}
                                        <div className="mt-6 flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <div className="h-1 w-8 rounded-full bg-(--primary) transition-all duration-500 group-hover:w-14" />

                                                <span className="text-[11px] font-medium text-slate-400">
                                                    مشاهده
                                                </span>
                                            </div>

                                            <div
                                                className="
                                                    flex
                                                    h-10
                                                    w-10
                                                    items-center
                                                    justify-center
                                                    rounded-full
                                                    border
                                                    border-slate-100
                                                    text-slate-400
                                                    transition-all
                                                    duration-500
                                                    group-hover:border-(--primary)
                                                    group-hover:bg-(--primary)
                                                    group-hover:text-white
                                                "
                                            >
                                                <RightOutlined className="text-xs" />
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </Link>
                        );
                    })}
                </div>
            )}
        </div>
    );
}