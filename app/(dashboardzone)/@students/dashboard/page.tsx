'use client'
import { CounterCart } from "../../components/widgets/counterCart";
import { BookMarked, BookUser, Library } from "lucide-react";
import Link from "next/link";
import PurchasedContents, { DashboardContent } from "../../components/layouts/contentsList";
import { BuyFromProfiles } from "../../components/layouts/profiles";
import { useEffect, useMemo, useState } from "react";
import { getSavedEntries } from "../../../../src/services/users";
import { mapEntry } from "../../../../src/services/contents";
import { getSiteStats, SiteStats } from "../../../../src/services/taxonomy";

const formatCount = (value?: number | null) =>
    value === undefined || value === null ? "-" : new Intl.NumberFormat("fa-IR").format(value)

export default function Page() {
    const [isOwnerHover , setOwnerHover] = useState<number | null>(null)
    const [frezed , setFrezed] = useState<boolean> (false)
    const [seeAll , setSeeAll] = useState<boolean>(false)
    const [savedCount , setSavedCount] = useState<number | null>(null)
    const [stats , setStats] = useState<SiteStats | null>(null)
    const [saved , setSaved] = useState<ReturnType<typeof mapEntry>[]>([])
    const [loading , setLoading] = useState(true)

    useEffect(() => {
        getSavedEntries({offset : 0 , size : 30}).then((res) => {
            if (res.sucsess) {
                setSavedCount(res.data.data.total)
                setSaved(res.data.data.result.map(mapEntry))
            }
            setLoading(false)
        })
        getSiteStats().then(setStats)
    } , [])

    // مدرس‌ها از روی محتواهای ذخیره شده
    const contentProviders = useMemo(() => {
        const names = Array.from(new Set(saved.map((item) => item.author || "بدون نام")))
        return names.map((name , index) => ({ id : index + 1 , name }))
    } , [saved])

    const contents : DashboardContent[] = useMemo(() => saved.map((item) => ({
        id : item.id ,
        title : item.title ,
        description : item.description ,
        category : item.type ,
        instructor : item.author ,
        duration : item.updatedAt ,
        owner_id : contentProviders.find((provider) => provider.name === (item.author || "بدون نام"))?.id ?? 0 ,
        href : item.href ,
    })) , [saved , contentProviders])

    return (
        <>
            <div className="w-full flex justify-around items-center overflow-hidden">
                <Link href="/dashboard/favorites" className="w-full">
                    <CounterCart counter={formatCount(savedCount)} textColor="#EAB308" title="محتواهای ذخیره شده" Icon={
                        <div className="w-10 h-10 rounded-xl bg-[#EAB308] flex justify-center items-center ml-2">
                            <BookMarked className="text-white" />
                        </div>
                        } bgColor="var(--card-favorite)" />
                </Link>
                <Link href="/contents" className="w-full">
                    <CounterCart counter={formatCount(stats?.contents)} textColor="#0EA5E9" title="محتواهای آموزشی" Icon={
                        <div className="w-10 h-10 rounded-xl bg-blue-400 flex justify-center items-center ml-2">
                            <Library className="text-white" />
                        </div>
                        } bgColor="var(--card-purchased)" />
                </Link>
                <CounterCart counter={formatCount(stats?.teachers)} textColor="#10B981" title="معلم‌های فعال" Icon={
                    <div className="w-10 h-10 rounded-xl bg-[#10B981] flex justify-center items-center ml-2">
                        <BookUser className="text-white" />
                    </div>} bgColor="var(--card-learning)" />
            </div>
            <div className={`p-2 flex justify-center items-center ${seeAll && "h-[86vh] bg-white w-[80%]! fixed bottom-0 left-0 flex justify-start items-start" || "w-full"} rounded-3xl`}>
                {contentProviders.length > 0 && (
                    <div className={`w-[15%] bg-white ${seeAll && "h-[84vh]" || "h-[60vh]"} rounded-3xl overflow-y-scroll cu-scroll rounded-l-none`}>
                        {
                            contentProviders.map((item) => (
                                <BuyFromProfiles frized={frezed} setFrized={setFrezed} curentOwnerId={isOwnerHover} ownerHover={setOwnerHover} id={item.id} name={item.name} key={item.id} />
                            ))
                        }
                    </div>
                )}
                <div className={`${contentProviders.length > 0 ? "w-[85%] rounded-r-none" : "w-full"} bg-white ${seeAll && "h-[84vh]" || "h-[60vh]"} overflow-y-scroll cu-scroll rounded-3xl p-5`}>
                    <PurchasedContents
                        setAllSee={setSeeAll}
                        isOwnerHover={isOwnerHover}
                        contents={contents}
                        loading={loading}
                        title="محتواهای ذخیره شده"
                        subtitle="دسترسی سریع به محتواهایی که ذخیره کرده‌اید"
                        emptyText="هنوز محتوایی ذخیره نکرده‌اید"
                    />
                </div>
            </div>
        </>
    )
}
