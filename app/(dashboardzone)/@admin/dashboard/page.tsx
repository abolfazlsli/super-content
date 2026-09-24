import { Book, UserPlus } from "lucide-react";
import { CounterCart } from "../../components/widgets/counterCart";
import { ActionCart } from "../../components/widgets/actions-cart";
import { ActionsCarts } from "../../components/data/actions-carts";

export default function Page() {
    return (
        <>
            <div className="p-2 flex justify-center items-center gap-3">
                <div className="p-2 w-[50%]">
                    <CounterCart
                        bgColor="#E8F5FF"
                        Icon={<Book className="text-[#1976D2]" />}
                        counter="10"
                        textColor="#1976D2"
                        title="درخواست‌های تغییر نقش"
                    />
                </div>

                <div className="p-2 w-[50%]">
                    <CounterCart
                        bgColor="#FFF3E0"
                        Icon={<Book className="text-[#F57C00]" />}
                        counter="10"
                        textColor="#F57C00"
                        title="محتواهای جدید"
                    />
                </div>
            </div>
            <div className="w-full flex justify-center items-center p-2">
                {
                    ActionsCarts.map(
                        (item , index) => (
                            <ActionCart actionText={item.label} icon={<item.icon />} link={item.link} key={index} />
                        )
                    )
                }
            </div>
        </>
    )
}