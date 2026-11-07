'use client'

import { Empty, Skeleton, Tag } from "antd";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Bell } from "lucide-react";
import { Title } from "../../../../../src/components/widgets/title";
import { userStor } from "../../../../../src/store/user-store/userStore";
import { ContentEntry, formatDate, mapEntry } from "../../../../../src/services/contents";
import { getMyEntries } from "../../../../../src/services/fields";
import { getMyRoleRequest } from "../../../../../src/services/users";

type Notification = {
    id: string;
    title: string;
    text: string;
    date: string;
    color: string;
    tag: string;
    href?: string;
};

/*
 * اعلان‌ها از رویدادهای واقعی ساخته میشن :
 * معلم : تایید / رد محتوا ، همه : وضعیت درخواست تغییر نقش
 */
export const NotificationsBox = () => {
    const { userInfo } = userStor();
    const [items, setItems] = useState<Notification[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!userInfo) return;

        const load = async () => {
            const result: Notification[] = [];

            const roleRes = await getMyRoleRequest();
            const request = roleRes.sucsess ? roleRes.data.data.result : null;
            if (request) {
                result.push({
                    id: `role-${request.id}`,
                    title: "درخواست تغییر نقش",
                    text:
                        request.status === "accepted"
                            ? "درخواست شما برای نقش معلم تایید شد"
                            : request.status === "rejected"
                                ? "درخواست شما برای نقش معلم رد شد"
                                : "درخواست شما در انتظار بررسی است",
                    date: formatDate(request.create_at),
                    color: request.status === "accepted" ? "green" : request.status === "rejected" ? "red" : "orange",
                    tag: request.status === "accepted" ? "تایید شده" : request.status === "rejected" ? "رد شده" : "در انتظار",
                    href: "/dashboard/profile",
                });
            }

            if (userInfo.role === "managers") {
                const [active, rejected] = await Promise.all([
                    getMyEntries({ offset: 0, size: 10 }, "active"),
                    getMyEntries({ offset: 0, size: 10 }, "disactive"),
                ]);
                const toNotification = (entry: ContentEntry): Notification => {
                    const item = mapEntry(entry);
                    const accepted = entry.status === "active";
                    return {
                        id: `entry-${entry.id}`,
                        title: item.title,
                        text: accepted
                            ? "محتوای شما تایید شد و در سایت نمایش داده می‌شود"
                            : "محتوای شما توسط مدیر رد شد",
                        date: item.updatedAt,
                        color: accepted ? "green" : "red",
                        tag: accepted ? "تایید شده" : "رد شده",
                        href: accepted ? item.href : "/dashboard/my-content",
                    };
                };
                const entries = [
                    ...(active.sucsess ? active.data.data.result : []),
                    ...(rejected.sucsess ? rejected.data.data.result : []),
                ] as ContentEntry[];
                entries
                    .sort((a, b) => String(b.create_at).localeCompare(String(a.create_at)))
                    .forEach((entry) => result.push(toNotification(entry)));
            }

            setItems(result);
            setLoading(false);
        };

        load();
    }, [userInfo]);

    return (
        <div className="w-full rounded-3xl bg-white p-5 mt-2">
            <div className="mb-5">
                <Title text="اعلان‌ها" />
            </div>

            {loading ? (
                <Skeleton active />
            ) : !items.length ? (
                <Empty description="اعلانی ندارید" className="py-10" />
            ) : (
                <div className="flex flex-col gap-3">
                    {items.map((item) => {
                        const body = (
                            <div className="flex items-start gap-3 rounded-2xl border border-slate-100 p-4 transition-shadow hover:shadow-cu">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-(--primary-light) text-(--primary)">
                                    <Bell size={18} />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <div className="flex flex-wrap items-center gap-2">
                                        <span className="truncate font-bold text-slate-800">{item.title}</span>
                                        <Tag color={item.color} className="m-0!">{item.tag}</Tag>
                                    </div>
                                    <p className="mt-1 text-xs text-slate-500">{item.text}</p>
                                </div>
                                <span className="shrink-0 text-[10px] text-slate-400">{item.date}</span>
                            </div>
                        );
                        return item.href ? (
                            <Link key={item.id} href={item.href}>{body}</Link>
                        ) : (
                            <div key={item.id}>{body}</div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};
