'use client'
import { DollarCircleFilled, UserOutlined } from "@ant-design/icons";
import { CounterCart } from "../../components/widgets/counterCart";
import { BookMarked, BookUser, CircleDollarSign, User2 } from "lucide-react";
import { Title } from "../../../../src/components/widgets/title";
import PurchasedContents from "../../components/layouts/contentsList";
import { Avatar, Space } from "antd";
import { BuyFromProfiles } from "../../components/layouts/profiles";
import { useState } from "react";

export default function Page() {
    const [isOwnerHover , setOwnerHover] = useState<number | null>(null)
    const [frezed , setFrezed] = useState<boolean> (false)
    const [seeAll , setSeeAll] = useState<boolean>(false)
    const contentProviders = [
    {
        id: 1,
        name: "دپارتمان آزمون محتوا پلاس",
    },
    {
        id: 2,
        name: "موسسه آموزشی گاج",
    },
    {
        id: 3,
        name: "دپارتمان آموزش ریاضی",
    },
    {
        id: 4,
        name: "آکادمی کنکور پلاس",
    },
    {
        id: 5,
        name: "مدرسه آنلاین دانا",
    },
    {
        id: 6,
        name: "دپارتمان محتوای آموزشی",
    },
    {
        id: 7,
        name: "آکادمی استادینو",
    },
    {
        id: 8,
        name: "مرکز آموزش هوشمند",
    },
];
    return (
        <>
            <div className="w-full flex justify-around items-center overflow-hidden">
                <CounterCart counter="10" textColor="#0EA5E9" title="محتوا های من" Icon={
                    <div className="w-10 h-10 rounded-xl bg-blue-400 flex justify-center items-center ml-2">
                        <CircleDollarSign className="text-white" />
                    </div>
                    } bgColor="var(--card-purchased)" />
                <CounterCart counter="10" textColor="#EAB308" title="محتواهای آرشیو شده" Icon={
                    <div className="w-10 h-10 rounded-xl bg-[#EAB308] flex justify-center items-center ml-2">
                        <BookMarked className="text-white" />
                    </div>
                    } bgColor="var(--card-favorite)" />
                <CounterCart counter="10" textColor="#10B981" title="محتوا های فروخته شده" Icon={
                    <div className="w-10 h-10 rounded-xl bg-[#10B981] flex justify-center items-center ml-2">
                        <BookUser className="text-white" />
                    </div>} bgColor="var(--card-learning)" />
            </div>
            <div className={`p-2 flex justify-center items-center ${seeAll && "h-[86vh] bg-white w-[80%]! fixed bottom-0 left-0 flex justify-start items-start" || "w-full"} rounded-3xl`}>
                {/* <div className={`w-[15%] bg-white ${seeAll && "h-[84vh]" || "h-[60vh]"} rounded-3xl overflow-y-scroll cu-scroll rounded-l-none`}>
                    {
                        contentProviders.map((item , index) => (
                            <BuyFromProfiles frized={frezed} setFrized={setFrezed} curentOwnerId={isOwnerHover} ownerHover={setOwnerHover} id={item.id} name={item.name} key={index} />
                        ))
                    }
                    
                </div> */}
                <div className={`w-full bg-white ${seeAll && "h-[84vh]" || "h-[60vh]"} overflow-y-scroll cu-scroll rounded-3xl p-5`}>
                    <PurchasedContents setAllSee={setSeeAll} isOwnerHover={isOwnerHover} />
                </div>
                
            </div>
        </>
    )
}