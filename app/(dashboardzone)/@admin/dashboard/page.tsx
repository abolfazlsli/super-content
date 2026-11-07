'use client'
import { Book, UserPlus } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CounterCart } from "../../components/widgets/counterCart";
import { ActionCart } from "../../components/widgets/actions-cart";
import { ActionsCarts } from "../../components/data/actions-carts";
import { getEntriesByStatus, getRoleRequests } from "../../../../src/services/users";

export default function Page() {
    const [roleRequests, setRoleRequests] = useState<number | null>(null)
    const [newContents, setNewContents] = useState<number | null>(null)

    useEffect(() => {
        getRoleRequests({ offset: 0, size: 1 }, "pendding").then((res) => {
            if (res.sucsess) setRoleRequests(res.data.data.total)
        })
        getEntriesByStatus({ offset: 0, size: 1 }, "pendding").then((res) => {
            if (res.sucsess) setNewContents(res.data.data.total)
        })
    }, [])

    const formatCount = (value: number | null) =>
        value === null ? "-" : new Intl.NumberFormat("fa-IR").format(value)

    return (
        <>
            <div className="p-2 flex justify-center items-center gap-3">
                <Link href="/dashboard/accept-roles" className="p-2 w-[50%]">
                    <CounterCart
                        bgColor="#E8F5FF"
                        Icon={<UserPlus className="text-[#1976D2]" />}
                        counter={formatCount(roleRequests)}
                        textColor="#1976D2"
                        title="درخواست‌های تغییر نقش"
                    />
                </Link>

                <Link href="/dashboard/accept-contents" className="p-2 w-[50%]">
                    <CounterCart
                        bgColor="#FFF3E0"
                        Icon={<Book className="text-[#F57C00]" />}
                        counter={formatCount(newContents)}
                        textColor="#F57C00"
                        title="محتواهای جدید"
                    />
                </Link>
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
