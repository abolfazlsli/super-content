'use client'

import { Button, message } from "antd";
import { HeartOff } from "lucide-react";
import { useEffect, useState } from "react";
import { Title } from "../../../../../src/components/widgets/title";
import { ContentItem, mapEntry } from "../../../../../src/services/contents";
import { getSavedEntries, toggleSaveEntry } from "../../../../../src/services/users";
import { EntriesList } from "./EntriesList";

const PAGE_SIZE = 10;

/* لیست علاقه‌مندی‌های کاربر (دانش‌آموز و معلم) */
export const SavedContents = () => {
    const [items, setItems] = useState<ContentItem[]>([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);

    const handleGetData = async () => {
        setLoading(true);
        const res = await getSavedEntries({
            offset: (page - 1) * PAGE_SIZE,
            size: PAGE_SIZE,
        });
        if (res.sucsess) {
            setItems(res.data.data.result.map(mapEntry));
            setTotal(res.data.data.total);
        }
        setLoading(false);
    };

    useEffect(() => {
        handleGetData();
    }, [page]);

    const handleRemove = async (id: string) => {
        const res = await toggleSaveEntry(id);
        if (res.sucsess) {
            message.success("از علاقه‌مندی‌ها حذف شد");
            handleGetData();
        }
    };

    return (
        <div className="w-full rounded-3xl bg-white p-5 mt-2">
            <div className="mb-5">
                <Title text="علاقه‌مندی‌ها" />
            </div>

            <EntriesList
                items={items}
                loading={loading}
                total={total}
                page={page}
                pageSize={PAGE_SIZE}
                onPageChange={setPage}
                emptyText="هنوز محتوایی به علاقه‌مندی‌ها اضافه نکرده‌اید"
                renderActions={(item) => (
                    <Button
                        danger
                        type="text"
                        icon={<HeartOff size={16} />}
                        onClick={() => handleRemove(item.id)}
                    >
                        حذف
                    </Button>
                )}
            />
        </div>
    );
};
