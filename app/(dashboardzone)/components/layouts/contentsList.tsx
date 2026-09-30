'use client'
import { ChevronLeft, ShoppingBag } from "lucide-react";
import { Title } from "../../../../src/components/widgets/title";
import PurchasedContentCard from "./contentsCarts";
import { Button } from "antd";

const contents = [
    {
        title: "مجموعه نمونه سوالات امتحانی نهایی دوازدهم",
        description: "مجموعه کامل نمونه سوالات امتحانات نهایی",
        category: "نمونه سوال",
        instructor: "دپارتمان آزمون بعثت محتوا",
        owner_id: 1,
        progress: 72,
        duration: "۲ ساعت",
        lessons: 12,
    },
    {
        title: "آموزش جامع ریاضی دوازدهم",
        description: "آموزش کامل ریاضی با تمرین و نمونه سوال",
        category: "دوره آموزشی",
        instructor: "دپارتمان آموزش ریاضی",
        owner_id: 3,
        progress: 34,
        duration: "۸ ساعت",
        lessons: 24,
    },
    {
        title: "جمع‌بندی فیزیک کنکور",
        description: "مرور سریع مباحث مهم فیزیک",
        category: "ویدئو آموزشی",
        instructor: "موسسه آموزشی گاج",
        owner_id: 2,
        progress: 0,
        duration: "۵ ساعت",
        lessons: 18,
    },
    {
        title: "آموزش تست‌زنی حرفه‌ای",
        description: "تکنیک‌های تست‌زنی و مدیریت زمان",
        category: "مهارت",
        instructor: "آکادمی کنکور پلاس",
        owner_id: 4,
        progress: 91,
        duration: "۳ ساعت",
        lessons: 10,
    },
];

export default function PurchasedContents({isOwnerHover , setAllSee} : {isOwnerHover : number | null , setAllSee : any}) {
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
                        <Title text="محتوا های من" />

                        <p className="
                            mt-1
                            text-[10px]
                            text-slate-400
                        ">
                            دسترسی سریع به محتواهای شما
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

            {/* Grid */}
            <div className="
                grid
                grid-cols-1
                gap-4
                sm:grid-cols-2
                xl:grid-cols-3
            ">
                {contents.map((content, index) => (
                    <PurchasedContentCard
                        isHoverOwner={isOwnerHover}
                        key={index}
                        {...content}
                        onClick={() => {
                            console.log("open content", index);
                        }}
                    />
                ))}
            </div>

        </div>
    );
}