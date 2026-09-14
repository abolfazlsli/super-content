import { DollarCircleFilled } from "@ant-design/icons";
import { CounterCart } from "../../components/widgets/counterCart";
import { BookMarked, BookUser, CircleDollarSign } from "lucide-react";

export default function Page() {
    return (
        <>
            <div className="w-full flex justify-around items-center overflow-hidden">
                <CounterCart counter="10" textColor="#0EA5E9" title="دوره های خریداری شده" Icon={
                    <div className="w-10 h-10 rounded-xl bg-blue-400 flex justify-center items-center ml-2">
                        <CircleDollarSign className="text-white" />
                    </div>
                    } bgColor="var(--card-purchased)" />
                <CounterCart counter="10" textColor="#EAB308" title="محتواهای ذخیره شده" Icon={
                    <div className="w-10 h-10 rounded-xl bg-[#EAB308] flex justify-center items-center ml-2">
                        <BookMarked className="text-white" />
                    </div>
                    } bgColor="var(--card-favorite)" />
                <CounterCart counter="10" textColor="#10B981" title="درحال آموزش" Icon={
                    <div className="w-10 h-10 rounded-xl bg-[#10B981] flex justify-center items-center ml-2">
                        <BookUser className="text-white" />
                    </div>} bgColor="var(--card-learning)" />
            </div>
            <div className="w-full p-2 flex justify-center items-center">
                <div className="w-[85%] bg-white h-100 rounded-3xl"></div>
                <div className="w-[15%] bg-white h-100 rounded-3xl  mr-5"></div>
            </div>
        </>
    )
}