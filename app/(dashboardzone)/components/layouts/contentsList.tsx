'use client'
import { ChevronLeft, ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";
import { Title } from "../../../../src/components/widgets/title";
import PurchasedContentCard from "./contentsCarts";
import { Button, Empty, Skeleton } from "antd";

export type DashboardContent = {
    id: string;
    title: string;
    description?: string;
    category: string;
    instructor?: string;
    owner_id: number;
    duration?: string;
    href: string;
};

type PurchasedContentsProps = {
    isOwnerHover: number | null;
    setAllSee: any;
    contents: DashboardContent[];
    loading?: boolean;
    title?: string;
    subtitle?: string;
    emptyText?: string;
};

export default function PurchasedContents({
    isOwnerHover,
    setAllSee,
    contents,
    loading = false,
    title = "محتوا های من",
    subtitle = "دسترسی سریع به محتواهای شما",
    emptyText = "محتوایی وجود ندارد",
}: PurchasedContentsProps) {
    const router = useRouter();

    return (
        <div
            dir="rtl"
            className="
                w-full
                rounded-3xl
                bg-white
                p-5
            "
        >

            {/* Header */}
            <div className="mb-5 flex items-center justify-between">

                <div className="flex items-center gap-3">

                    <div className="
                        flex h-10 w-10
                        items-center justify-center
                        rounded-xl
                        bg-sky-50
                        text-sky-500
                    ">
                        <ShoppingBag size={19} />
                    </div>

                    <div>
                        <Title text={title} />

                        <p className="
                            mt-1
                            text-[10px]
                            text-slate-400
                        ">
                            {subtitle}
                        </p>
                    </div>

                </div>

                <Button
                    className="
                        flex!
                        items-center!
                        gap-1!
                        rounded-xl!
                        px-3 py-2!
                        text-[10px]!
                        font-bold!
                        text-sky-600!
                        transition-colors!
                        hover:bg-sky-50!
                    "
                    onClick={() => setAllSee((pre : boolean) => !pre)}
                >
                    مشاهده همه
                    <ChevronLeft size={13} />
                </Button>

            </div>

            {loading ? (
                <Skeleton active paragraph={{ rows: 6 }} />
            ) : !contents.length ? (
                <Empty description={emptyText} className="py-10" />
            ) : (
                /* Grid */
                <div className="
                    grid
                    grid-cols-1
                    gap-4
                    sm:grid-cols-2
                    xl:grid-cols-3
                ">
                    {contents.map((content) => (
                        <PurchasedContentCard
                            isHoverOwner={isOwnerHover}
                            key={content.id}
                            {...content}
                            onClick={() => {
                                if (content.href && content.href !== "#") router.push(content.href);
                            }}
                        />
                    ))}
                </div>
            )}

        </div>
    );
}
