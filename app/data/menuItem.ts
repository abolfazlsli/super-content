
import {
    DashboardOutlined,
    FileTextOutlined,
    UserOutlined,
    HeartOutlined,
    BellOutlined,
    WalletOutlined,
    AppstoreAddOutlined,
    UserSwitchOutlined,
    FileDoneOutlined,
} from "@ant-design/icons";
import { UserInfo } from "../../src/store/user-store/type";

type Role = UserInfo["role"];

const ALL: Role[] = ["students", "managers", "admin"];

export const MenuItems: {
    icon: typeof DashboardOutlined;
    label: string;
    link: string;
    count?: number;
    roles: Role[];
}[] = [
    {
        icon: DashboardOutlined,
        label: "داشبورد",
        link: "/dashboard",
        roles: ALL,
    },
    {
        icon: UserOutlined,
        label: "پروفایل",
        link: "/dashboard/profile",
        roles: ALL,
    },
    {
        icon: FileTextOutlined,
        label: "محتواهای من",
        link: "/dashboard/my-content",
        roles: ["students", "managers"],
    },
    {
        icon: AppstoreAddOutlined,
        label: "افزودن محتوا",
        link: "/dashboard/instance-list",
        roles: ["managers", "admin"],
    },
    {
        icon: FileDoneOutlined,
        label: "تایید محتوا",
        link: "/dashboard/accept-contents",
        roles: ["admin"],
    },
    {
        icon: UserSwitchOutlined,
        label: "تایید دسترسی",
        link: "/dashboard/accept-roles",
        roles: ["admin"],
    },
    {
        icon: HeartOutlined,
        label: "علاقه‌مندی‌ها",
        link: "/dashboard/favorites",
        roles: ["students", "managers"],
    },
    {
        icon: BellOutlined,
        label: "اعلان‌ها",
        link: "/dashboard/notifications",
        roles: ["students", "managers"],
    },
    {
        icon: WalletOutlined,
        label: "کیف پول",
        link: "/dashboard/wallet",
        roles: ["students", "managers"],
    },
];
