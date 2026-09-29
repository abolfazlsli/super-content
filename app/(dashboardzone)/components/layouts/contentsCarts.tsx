import {
    BookOpen,
    Clock3,
    Play,
    ChevronLeft,
    CheckCircle2,
} from "lucide-react";

interface PurchasedContentCardProps {
    title: string;
    description?: string;
    category: string;
    instructor?: string;
    progress?: number;
    duration?: string;
    lessons?: number;
    image?: string;
    owner_id : number ,
    isHoverOwner : number | null,
    onClick?: () => void;
}

export default function PurchasedContentCard({
    title,
    description,
    category,
    instructor,
    progress = 0,
    duration,
    lessons,
    image,
    owner_id ,
    isHoverOwner ,
    onClick,
}: PurchasedContentCardProps) {
    return (
        <article
            dir="rtl"
            data-owner-id={owner_id}
            onClick={onClick}
            className={`
                group relative overflow-hidden
                rounded-[22px]
                border border-slate-100
                bg-white
                cursor-pointer
                transition-all duration-300
                hover:-translate-y-1
                hover:border-sky-100
                hover:shadow-[0_18px_45px_rgba(14,165,233,0.12)]
                ${owner_id == isHoverOwner ? "opacity-100 shadow-[0_18px_45px_rgba(14,165,233,0.12)]" : ((owner_id != isHoverOwner) && (isHoverOwner != null)) ? "opacity-40" : "opacity-100" }
            `}
        >
            {/* Cover */}
            <div className="relative h-[145px] overflow-hidden bg-gradient-to-br from-[#DFF6FF] via-[#EEF9FF] to-[#CDEFFF]">

                {/* Decorative blobs */}
                <div className="
                    absolute -right-10 -top-12
                    h-32 w-32 rounded-full
                    bg-[#20B2E8]/20
                    transition-transform duration-500
                    group-hover:scale-125
                " />

                <div className="
                    absolute -left-12 -bottom-16
                    h-36 w-36 rounded-full
                    bg-[#FFD34E]/20
                    transition-transform duration-500
                    group-hover:scale-125
                " />

                {/* Pattern */}
                <div
                    className="
                        absolute inset-0 opacity-[0.12]
                        text-slate-900
                        [background-image:radial-gradient(circle_at_1px_1px,currentColor_1px,transparent_1px)]
                        [background-size:18px_18px]
                    "
                />

                {/* Top badges */}
                <div className="absolute inset-x-4 top-4 flex items-center justify-between">

                    <span className="
                        rounded-full
                        border border-white/70
                        bg-white/65
                        px-2.5 py-1
                        text-[10px] font-bold
                        text-sky-700
                        shadow-sm
                        backdrop-blur-md
                    ">
                        {category}
                    </span>

                    <span className="
                        flex items-center gap-1
                        rounded-full
                        bg-white/65
                        px-2 py-1
                        text-[10px]
                        font-medium
                        text-slate-500
                        backdrop-blur-md
                    ">
                        <CheckCircle2 size={12} className="text-emerald-500" />
                        خریداری شده
                    </span>

                </div>

                {/* Center icon */}
                <div className="absolute inset-0 flex items-center justify-center">

                    <div className="
                        relative
                        flex h-[62px] w-[62px]
                        items-center justify-center
                        rounded-[20px]
                        bg-white/80
                        text-sky-500
                        shadow-[0_12px_30px_rgba(14,165,233,0.15)]
                        ring-1 ring-white
                        backdrop-blur-md
                        transition-all duration-300
                        group-hover:-translate-y-1
                        group-hover:scale-105
                    ">
                        <div className="
                            absolute inset-1.5
                            rounded-[16px]
                            border border-white"
                        />

                        <BookOpen size={28} strokeWidth={1.8} />
                    </div>

                </div>

                {/* Progress */}
                {progress > 0 && (
                    <div className="
                        absolute bottom-0 inset-x-0
                        h-[4px]
                        bg-black/5
                    ">
                        <div
                            className="
                                h-full
                                rounded-l-full
                                bg-[#20B2E8]
                                transition-all duration-500
                            "
                            style={{
                                width: `${Math.min(progress, 100)}%`,
                            }}
                        />
                    </div>
                )}

            </div>

            {/* Content */}
            <div className="p-4">

                {/* Category */}
                <div className="mb-2 flex items-center justify-between">

                    <span className="
                        rounded-lg
                        bg-sky-50
                        px-2 py-1
                        text-[10px]
                        font-bold
                        text-sky-600
                    ">
                        {category}
                    </span>

                    {progress > 0 && (
                        <span className="
                            text-[10px]
                            font-bold
                            text-slate-400
                        ">
                            {progress}٪ تکمیل شده
                        </span>
                    )}

                </div>

                {/* Title */}
                <h3 className="
                    min-h-[48px]
                    text-right
                    text-sm
                    font-extrabold
                    leading-6
                    text-slate-900
                    transition-colors
                    group-hover:text-[#1291C3]
                    line-clamp-2
                ">
                    {title}
                </h3>

                {/* Description */}
                {description && (
                    <p className="
                        mt-1.5
                        truncate
                        text-right
                        text-[11px]
                        leading-5
                        text-slate-400
                    ">
                        {description}
                    </p>
                )}

                {/* Meta */}
                <div className="
                    mt-3
                    flex
                    items-center
                    gap-3
                    text-[10px]
                    text-slate-400
                ">

                    {instructor && (
                        <span className="truncate">
                            {instructor}
                        </span>
                    )}

                    {duration && (
                        <span className="flex items-center gap-1 shrink-0">
                            <Clock3 size={12} />
                            {duration}
                        </span>
                    )}

                    {lessons && (
                        <span className="flex items-center gap-1 shrink-0">
                            <BookOpen size={12} />
                            {lessons} درس
                        </span>
                    )}

                </div>

                {/* Bottom */}
                <div className="
                    mt-4
                    flex
                    items-center
                    justify-between
                    border-t
                    border-slate-100
                    pt-3
                ">

                    <div>
                        <div className="
                            text-[10px]
                            font-medium
                            text-slate-400
                        ">
                            وضعیت یادگیری
                        </div>

                        <div className="
                            mt-0.5
                            text-xs
                            font-extrabold
                            text-slate-800
                        ">
                            {progress === 0
                                ? "شروع نشده"
                                : progress === 100
                                    ? "تکمیل شده"
                                    : "در حال یادگیری"
                            }
                        </div>
                    </div>

                    <div className="
                        flex
                        items-center
                        gap-1
                        rounded-xl
                        bg-sky-50
                        px-3 py-2
                        text-[10px]
                        font-bold
                        text-sky-600
                        transition-all duration-300
                        group-hover:bg-[#20B2E8]
                        group-hover:text-white
                    ">
                        <Play size={12} fill="currentColor" />
                        ادامه
                        <ChevronLeft
                            size={12}
                            className="transition-transform group-hover:-translate-x-0.5"
                        />
                    </div>

                </div>

            </div>
        </article>
    );
}