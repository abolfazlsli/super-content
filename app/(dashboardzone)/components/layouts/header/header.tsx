import { FileCheck, Plus, ShoppingBagIcon } from "lucide-react"
import { Logo } from "../../../../../src/components/widgets/logo"
import { SearchBox } from "../../../../../src/components/widgets/searchBox"
import { CuButton } from "../../../../../src/components/widgets/buttons"
import { UserInfo } from "../../../../../src/store/user-store/type"
import Link from "next/link"

/* دکمه اصلی هدر برای هر نقش */
const headerAction: Record<UserInfo["role"], { href: string, label: string, icon: React.ReactNode }> = {
    managers: { href: "/dashboard/instance-list", label: "افزودن محتوا", icon: <Plus /> },
    admin: { href: "/dashboard/accept-contents", label: "تایید محتوا", icon: <FileCheck /> },
    students: { href: "/contents", label: "مشاهده محتوا", icon: <ShoppingBagIcon /> },
}


export const DashboardHeader = (userInfo : UserInfo) => {

    return (
        <>
        <div className="w-full flex justify-center items-center p-2 dashboard-scope">
            <div className="w-full flex justify-between items-center bg-white p-5 rounded-3xl shadow-cu">
                <div className="w-[20%] flex justify-center items-center">
                    <Logo />
                </div>
                <div className="w-[60%] max-md:hidden! flex justify-center items-center">
                    <SearchBox />
                </div>
                <div className="w-[20%] flex justify-center items-center">
                    <Link href={headerAction[userInfo.role].href}>
                        <CuButton type="text" className="bg-(--primary)! text-white! p-5! relative!" size="large">
                            {headerAction[userInfo.role].icon}
                            <h1 className="font-bold max-md:hidden!">
                                {headerAction[userInfo.role].label}
                            </h1>
                        </CuButton>
                    </Link>
                </div>
            </div>
        </div>
        </>
    )
}