import {
    LogoutOutlined,
    UserOutlined,
} from "@ant-design/icons";
import { userStor } from "../../../../../src/store/user-store/userStore";
import { MenuItems } from "../../../../data/menuItem";
import Link from "next/link";
import { Badge, Button, Modal } from "antd";
import { CuButton } from "../../../../../src/components/widgets/buttons";
import { logOut } from "../../../../../src/utils/regs";
import { useState } from "react";
import { Logout } from "../../../../../src/components/widgets/logout";

export const DahboardSideBar = () => {
    const { userInfo } = userStor();

    

    return (
        <div className="w-[20%] flex justify-center items-start p-2">
            <aside className="w-full h-[82vh] bg-white rounded-2xl shadow-sm p-3 flex flex-col">

                {/* User Profile */}
                <div className="w-full bg-(--primary) p-3 rounded-2xl flex items-center">
                    <div className="w-12 h-12 bg-white rounded-xl flex justify-center items-center shrink-0">
                        <UserOutlined className="text-(--primary)! text-xl" />
                    </div>

                    <div className="mr-3 min-w-0">
                        <h1 className="text-white text-base font-semibold truncate">
                            {userInfo?.name || "کاربر"}
                        </h1>

                        <p className="text-sm text-white/70 mt-1">
                            {userInfo?.phone || "شماره ثبت نشده"}
                        </p>
                    </div>
                </div>

                {/* Menu */}
                <nav className="w-full mt-4 flex flex-col gap-1.5">
                    {MenuItems.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <Link
                                key={item.link}
                                href={item.link}
                                className={`
                                    group
                                    w-full
                                    h-12
                                    px-3
                                    rounded-xl
                                    flex
                                    items-center
                                    gap-3
                                    transition-all
                                    duration-200
                                    ${
                                        index === 0
                                            ? "bg-(--primary)/10 text-(--primary)"
                                            : "text-gray-600 hover:bg-gray-50 hover:text-(--primary)"
                                    }
                                `}
                            >
                                <div
                                    className={`
                                        w-9
                                        h-9
                                        rounded-lg
                                        flex
                                        items-center
                                        justify-center
                                        transition-all
                                        ${
                                            index === 0
                                                ? "bg-(--primary) text-white"
                                                : "bg-gray-50 text-gray-500 group-hover:bg-(--primary)/10 group-hover:text-(--primary)"
                                        }
                                    `}
                                >
                                    <Icon className="text-lg" />
                                </div>

                                <span className="text-sm font-medium">
                                    {item.label}
                                </span>
                                {
                                    item?.count && item.count > 0 && <Badge count={item.count ?? 0} />
                                }
                            </Link>
                        );
                    })}
                </nav>

                {/* Bottom */}
                <div className="mt-auto px-2 pb-2">
                    {/* <div className="w-full h-px bg-gray-100 mb-3" />

                    <div className="text-xs text-gray-400 text-center">
                        پنل کاربری
                    </div> */}
                </div>
                <Logout />
            </aside>
        </div>
    );
};