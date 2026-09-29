import { Plus, ShoppingBagIcon } from "lucide-react"
import { Logo } from "../../../../../src/components/widgets/logo"
import { SearchBox } from "../../../../../src/components/widgets/searchBox"
import { Badge, Button } from "antd"
import { CuButton } from "../../../../../src/components/widgets/buttons"
import { userStor } from "../../../../../src/store/user-store/userStore"
import { UserInfo } from "../../../../../src/store/user-store/type"




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
                    <CuButton type="text" className="bg-(--primary)! text-white! p-5! relative!" size="large">
                        {
                            userInfo.role === "managers" ? 
                            <Plus /> :
                            <>
                                <Badge count={2} className="absolute! -top-1! -right-1! " />
                                <ShoppingBagIcon />
                            </>
                        }
                        <h1 className="font-bold max-md:hidden!">
                            {
                             userInfo.role === "managers" ?
                             "افزودن محتوا" :
                            "سبد خرید"
                            }
                        </h1>
                    </CuButton>
                </div>
            </div>
        </div>
        </>
    )
}