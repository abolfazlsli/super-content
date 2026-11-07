'use client'
import { CounterCart } from "../../components/widgets/counterCart";
import { BookCheck, BookMarked, Clock3, FileText } from "lucide-react";
import Link from "next/link";
import PurchasedContents, { DashboardContent } from "../../components/layouts/contentsList";
import { useEffect, useState } from "react";
import { ContentEntry, mapEntry } from "../../../../src/services/contents";
import { EntriesSummary, getMyEntries, getMyEntriesSummary } from "../../../../src/services/fields";
import { STATUS_META } from "../../components/layouts/entries-list/EntriesList";

const formatCount = (value?: number) =>
    value === undefined ? "-" : new Intl.NumberFormat("fa-IR").format(value)

export default function Page() {
    const [seeAll , setSeeAll] = useState<boolean>(false)
    const [summary , setSummary] = useState<EntriesSummary | null>(null)
    const [contents , setContents] = useState<DashboardContent[]>([])
    const [loading , setLoading] = useState(true)

    useEffect(() => {
        getMyEntriesSummary().then((res) => {
            if (res.sucsess) setSummary(res.data.data.result)
        })

        getMyEntries({offset : 0 , size : 12}).then((res) => {
            if (res.sucsess) {
                setContents(
                    (res.data.data.result as ContentEntry[]).map((entry) => {
                        const item = mapEntry(entry)
                        return {
                            id : item.id ,
                            title : item.title ,
                            description : item.description ,
                            category : item.type ,
                            instructor : STATUS_META[entry.status]?.label ?? entry.status ,
                            duration : item.updatedAt ,
                            owner_id : 0 ,
                            // فقط محتوای تایید شده صفحه عمومی داره
                            href : entry.status === "active" ? item.href : "/dashboard/my-content" ,
                        }
                    })
                )
            }
            setLoading(false)
        })
    } , [])

    return (
        <>
            <div className="w-full flex justify-around items-center overflow-hidden max-md:flex-wrap">
                <Link href="/dashboard/my-content" className="w-full">
                    <CounterCart counter={formatCount(summary?.total)} textColor="#0EA5E9" title="محتوا های من" Icon={
                        <div className="w-10 h-10 rounded-xl bg-blue-400 flex justify-center items-center ml-2">
                            <FileText className="text-white" />
                        </div>
                        } bgColor="var(--card-purchased)" />
                </Link>
                <CounterCart counter={formatCount(summary?.pendding)} textColor="#EAB308" title="در انتظار تایید" Icon={
                    <div className="w-10 h-10 rounded-xl bg-[#EAB308] flex justify-center items-center ml-2">
                        <Clock3 className="text-white" />
                    </div>
                    } bgColor="var(--card-favorite)" />
                <CounterCart counter={formatCount(summary?.active)} textColor="#10B981" title="محتواهای تایید شده" Icon={
                    <div className="w-10 h-10 rounded-xl bg-[#10B981] flex justify-center items-center ml-2">
                        <BookCheck className="text-white" />
                    </div>} bgColor="var(--card-learning)" />
                <CounterCart counter={formatCount(summary?.saves)} textColor="#8B5CF6" title="ذخیره توسط کاربران" Icon={
                    <div className="w-10 h-10 rounded-xl bg-[#8B5CF6] flex justify-center items-center ml-2">
                        <BookMarked className="text-white" />
                    </div>} bgColor="#EFE9FF" />
            </div>
            <div className={`p-2 flex justify-center items-center ${seeAll && "h-[86vh] bg-white w-[80%]! fixed bottom-0 left-0 flex justify-start items-start" || "w-full"} rounded-3xl`}>
                <div className={`w-full bg-white ${seeAll && "h-[84vh]" || "h-[60vh]"} overflow-y-scroll cu-scroll rounded-3xl p-5`}>
                    <PurchasedContents
                        setAllSee={setSeeAll}
                        isOwnerHover={null}
                        contents={contents}
                        loading={loading}
                        title="آخرین محتواهای من"
                        subtitle="وضعیت آخرین محتواهایی که ثبت کرده‌اید"
                        emptyText="هنوز محتوایی ثبت نکرده‌اید"
                    />
                </div>
            </div>
        </>
    )
}
