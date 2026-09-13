import {
    DashboardOutlined,
    FileTextOutlined,
    UserOutlined,
    HeartOutlined,
    BellOutlined,
    WalletOutlined,
} from "@ant-design/icons";

export const MenuItems = [
    {
        icon: DashboardOutlined,
        label: "داشبورد",
        link: "/dashboard",
    },
    {
        icon: UserOutlined,
        label: "پروفایل",
        link: "/dashboard/profile",
    },
    {
        icon: FileTextOutlined,
        label: "محتواهای من",
        link: "/dashboard/my-content",
    },
    {
        icon: HeartOutlined,
        label: "علاقه‌مندی‌ها",
        link: "/dashboard/favorites",
    },
    {
        icon: BellOutlined,
        label: "اعلان‌ها",
        link: "/dashboard/notifications",
        count: 10
    },
    {
        icon: WalletOutlined,
        label: "کیف پول",
        link: "/dashboard/wallet",
    },
];