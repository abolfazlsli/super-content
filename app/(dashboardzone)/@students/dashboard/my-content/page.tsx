'use client'
import { Button } from "antd";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Title } from "../../../../../src/components/widgets/title";
import { ContentItem, mapEntry } from "../../../../../src/services/contents";
import { getPurchasedEntries } from "../../../../../src/services/users";
import { EntriesList } from "../../../components/layouts/entries-list/EntriesList";

const PAGE_SIZE = 10;

export default function page() {
    const [items, setItems] = useState<ContentItem[]>([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const handleGetData = async () => {
            setLoading(true);
            const res = await getPurchasedEntries({
                offset: (page - 1) * PAGE_SIZE,
                size: PAGE_SIZE,
            });
            if (res.sucsess) {
                setItems(res.data.data.result.map(mapEntry));
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
                <Link href="/contents">
                    <Button type="primary">مشاهده محتواها</Button>
                </Link>
            </div>

            <EntriesList
                items={items}
                loading={loading}
                total={total}
                page={page}
                pageSize={PAGE_SIZE}
                onPageChange={setPage}
                emptyText="هنوز محتوایی خریداری نکرده‌اید"
            />
        </div>
    )
}
