import { Button } from "antd";
import { InstanceTabale } from "../../../components/layouts/instance-tabale/InstanceTabale";
import { Plus } from "lucide-react";
import Link from "next/link";

export default function Page() {
    return (
        <div dir="rtl" className="w-full bg-gray-50 p-4 md:p-6 min-h-full">
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-5">
                {/* هدر صفحه */}
                <div className="flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex flex-col gap-1">
                        <h1 className="m-0 text-xl font-bold text-gray-800">
                            نمونه‌ها
                        </h1>
                        <p className="m-0 text-sm text-gray-500">
                            لیست نمونه‌های ثبت‌شده را مشاهده و مدیریت کنید
                        </p>
                    </div>

                    <Link href="/dashboard/create-instance">
                        <Button
                            type="primary"
                            size="large"
                            icon={<Plus size={18} />}
                            className="flex! items-center! gap-1! w-full sm:w-auto"
                        >
                            افزودن نمونه
                        </Button>
                    </Link>
                </div>

                {/* کارت جدول */}
                <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white p-2 shadow-sm md:p-4">
                    <InstanceTabale />
                </div>
            </div>
        </div>
    );
}