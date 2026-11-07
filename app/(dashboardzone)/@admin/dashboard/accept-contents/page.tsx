'use client'
import { Button, Modal, Segmented, message } from "antd";
import { Check, Eye, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Title } from "../../../../../src/components/widgets/title";
import { ContentItem, mapEntry } from "../../../../../src/services/contents";
import { getEntriesByStatus, setEntryStatus } from "../../../../../src/services/users";
import { EntriesList } from "../../../components/layouts/entries-list/EntriesList";

const PAGE_SIZE = 10;

type Status = "pendding" | "active" | "disactive";
type Item = ContentItem & { status: Status };

export default function Page() {
    const [status, setStatus] = useState<Status>("pendding");
    const [items, setItems] = useState<Item[]>([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [preview, setPreview] = useState<Item | null>(null);

    const handleGetData = async () => {
        setLoading(true);
        const res = await getEntriesByStatus(
            { offset: (page - 1) * PAGE_SIZE, size: PAGE_SIZE },
            status
        );
        if (res.sucsess) {
            setItems(
                res.data.data.result.map((entry) => ({
                    ...mapEntry(entry),
                    status: entry.status,
                }))
            );
            setTotal(res.data.data.total);
        }
        setLoading(false);
    };

    useEffect(() => {
        handleGetData();
    }, [page, status]);

    const handleSetStatus = async (id: string, next: "active" | "disactive") => {
        const res = await setEntryStatus(id, next);
        if (res.sucsess) {
            message.success(next === "active" ? "محتوا تایید شد" : "محتوا رد شد");
            setPreview(null);
            handleGetData();
        } else {
            message.error("تغییر وضعیت انجام نشد");
        }
    };

    return (
        <div className="w-full rounded-3xl bg-white p-5 mt-2">
            <div className="mb-5 flex items-center justify-between gap-3 max-md:flex-col max-md:items-start">
                <Title text="تایید محتوا" />
                <Segmented
                    value={status}
                    onChange={(value) => {
                        setStatus(value as Status);
                        setPage(1);
                    }}
                    options={[
                        { value: "pendding", label: "در انتظار" },
                        { value: "active", label: "تایید شده" },
                        { value: "disactive", label: "رد شده" },
                    ]}
                />
            </div>

            <EntriesList
                items={items}
                loading={loading}
                total={total}
                page={page}
                pageSize={PAGE_SIZE}
                onPageChange={setPage}
                showStatus
                linkable={false}
                emptyText="محتوایی در این وضعیت وجود ندارد"
                renderActions={(item) => (
                    <>
                        <Button icon={<Eye size={16} />} onClick={() => setPreview(item as Item)}>
                            مشاهده
                        </Button>
                        {item.status !== "active" && (
                            <Button
                                type="primary"
                                icon={<Check size={16} />}
                                onClick={() => handleSetStatus(item.id, "active")}
                            >
                                تایید
                            </Button>
                        )}
                        {item.status !== "disactive" && (
                            <Button
                                danger
                                icon={<X size={16} />}
                                onClick={() => handleSetStatus(item.id, "disactive")}
                            >
                                رد
                            </Button>
                        )}
                    </>
                )}
            />

            <Modal
                open={!!preview}
                onCancel={() => setPreview(null)}
                title={preview?.title}
                footer={null}
            >
                {preview && (
                    <div className="flex flex-col gap-3 text-sm">
                        {preview.bannerUrl && (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img src={preview.bannerUrl} alt={preview.title} className="max-h-60 w-full rounded-2xl object-cover" />
                        )}
                        {preview.description && <p className="text-slate-600">{preview.description}</p>}
                        <div className="flex flex-col gap-1.5">
                            {preview.details.map((detail) => (
                                <div key={detail.label} className="flex justify-between gap-3 border-b border-slate-50 pb-1.5">
                                    <span className="text-slate-400">{detail.label}</span>
                                    <span className="font-bold text-slate-700">{detail.value}</span>
                                </div>
                            ))}
                        </div>
                        {preview.files.map((file) => (
                            <a key={file.id} href={file.url} target="_blank" rel="noreferrer" className="text-(--primary) font-bold">
                                {file.fieldName}: {file.name}
                            </a>
                        ))}
                    </div>
                )}
            </Modal>
        </div>
    )
}
