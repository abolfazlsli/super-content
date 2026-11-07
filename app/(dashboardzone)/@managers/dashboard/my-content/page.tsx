'use client'
import { Button } from "antd";
import { Plus } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Title } from "../../../../../src/components/widgets/title";
import { ContentEntry, mapEntry } from "../../../../../src/services/contents";
import { getMyEntries } from "../../../../../src/services/fields";
import { EntriesList } from "../../../components/layouts/entries-list/EntriesList";

const PAGE_SIZE = 10;

export default function page() {
    const [items, setItems] = useState<ReturnType<typeof toItem>[]>([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const handleGetData = async () => {
            setLoading(true);
            const res = await getMyEntries({
                offset: (page - 1) * PAGE_SIZE,
                size: PAGE_SIZE,
            });
            if (res.sucsess) {
                setItems(res.data.data.result.map(toItem));
                setTotal(res.data.data.total);
            }
            setLoading(false);
        };
        handleGetData();
    }, [page]);

    return (
        <div className="w-full rounded-3xl bg-white p-5 mt-2">
            <div className="mb-5 flex items-center justify-between">
                <Title text="محتواهای من" />
                <Link href="/dashboard/instance-list">
                    <Button type="primary" icon={<Plus size={16} />}>
                        افزودن محتوا
                    </Button>
                </Link>
            </div>

            <EntriesList
                items={items}
                loading={loading}
                total={total}
                page={page}
                pageSize={PAGE_SIZE}
                onPageChange={setPage}
                showStatus
                emptyText="هنوز محتوایی ثبت نکرده‌اید"
            />
        </div>
    )
}

/* فقط محتوای تایید شده صفحه عمومی دارد */
function toItem(entry: ContentEntry) {
    const item = mapEntry(entry);
    return {
        ...item,
        status: entry.status,
        href: entry.status === "active" ? item.href : "#",
    };
}
