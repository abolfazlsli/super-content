import { ShoppingBagIcon } from "lucide-react"
import { Logo } from "../../../../../src/components/widgets/logo"
import { SearchBox } from "../../../../../src/components/widgets/searchBox"
import { Badge, Button } from "antd"
import { CuButton } from "../../../../../src/components/widgets/buttons"

export const DashboardHeader = () => {

    return (
        <>
        <div className="w-full flex justify-center items-center p-2">
            <div className="w-full flex justify-between items-center bg-white p-5 rounded-2xl shadow-sm">
                <div className="w-[20%] flex justify-center items-center">
                    <Logo />
                </div>
                <div className="w-[60%] flex justify-center items-center">
                    <SearchBox />
                </div>
                <div className="w-[20%] flex justify-center items-center">
                    <CuButton type="text" className="bg-(--primary)! text-white! p-5! relative!" size="large">
                        <Badge count={2} className="absolute! -top-1! -right-1! " />
                        <ShoppingBagIcon />
                        <h1 className="font-bold">
                            سبد خرید
                        </h1>
                    </CuButton>
                </div>
            </div>
        </div>
        </>
    )
}