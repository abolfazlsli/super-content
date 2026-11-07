'use client'
import { Button, Empty, Pagination, Popconfirm, Segmented, Skeleton, Table, Tag, message } from "antd";
import { useEffect, useState } from "react";
import { Title } from "../../../../../src/components/widgets/title";
import { formatDate } from "../../../../../src/services/contents";
import {
    getRoleRequests,
    getZoneUsers,
    reviewRoleRequest,
    RoleRequest,
    setUserRole,
    ZoneUser,
} from "../../../../../src/services/users";

const PAGE_SIZE = 10;

const ROLE_LABEL: Record<string, string> = {
    students: "دانش‌آموز",
    managers: "معلم",
    admin: "مدیر",
};

const REQUEST_STATUS: Record<RoleRequest["status"], { label: string; color: string }> = {
    pendding: { label: "در انتظار", color: "orange" },
    accepted: { label: "تایید شده", color: "green" },
    rejected: { label: "رد شده", color: "red" },
};

const RoleRequests = () => {
    const [status, setStatus] = useState<RoleRequest["status"]>("pendding");
    const [items, setItems] = useState<RoleRequest[]>([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);

    const handleGetData = async () => {
        setLoading(true);
        const res = await getRoleRequests(
            { offset: (page - 1) * PAGE_SIZE, size: PAGE_SIZE },
            status
        );
        if (res.sucsess) {
            setItems(res.data.data.result);
            setTotal(res.data.data.total);
        }
        setLoading(false);
    };

    useEffect(() => {
        handleGetData();
    }, [page, status]);

    const handleReview = async (id: string, accept: boolean) => {
        const res = await reviewRoleRequest(id, accept);
        if (res.sucsess) {
            message.success(accept ? "درخواست تایید شد" : "درخواست رد شد");
            handleGetData();
        } else {
            message.error("انجام نشد");
        }
    };

    return (
        <div className="w-full rounded-3xl bg-white p-5 mt-2">
            <div className="mb-5 flex items-center justify-between gap-3 max-md:flex-col max-md:items-start">
                <Title text="درخواست‌های تغییر نقش" />
                <Segmented
                    value={status}
                    onChange={(value) => {
                        setStatus(value as RoleRequest["status"]);
                        setPage(1);
                    }}
                    options={[
                        { value: "pendding", label: "در انتظار" },
                        { value: "accepted", label: "تایید شده" },
                        { value: "rejected", label: "رد شده" },
                    ]}
                />
            </div>

            {loading ? (
                <Skeleton active />
            ) : !items.length ? (
                <Empty description="درخواستی وجود ندارد" />
            ) : (
                <div className="flex flex-col gap-3">
                    {items.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-center justify-between gap-3 rounded-2xl border border-slate-100 p-4 max-md:flex-col max-md:items-stretch"
                        >
                            <div className="min-w-0">
                                <div className="flex items-center gap-2">
                                    <span className="font-bold text-slate-800">{item.user.name}</span>
                                    <span className="text-xs text-slate-400">{item.user.phone}</span>
                                    <Tag color={REQUEST_STATUS[item.status].color} className="m-0!">
                                        {REQUEST_STATUS[item.status].label}
                                    </Tag>
                                </div>
                                <p className="mt-1 text-xs text-slate-500">
                                    درخواست نقش {ROLE_LABEL[item.role ?? ""] ?? item.role} · {formatDate(item.create_at)}
                                </p>
                                {item.message && (
                                    <p className="mt-1 text-xs text-slate-600">{item.message}</p>
                                )}
                            </div>

                            {item.status === "pendding" && (
                                <div className="flex shrink-0 gap-2 max-md:justify-end">
                                    <Button type="primary" onClick={() => handleReview(item.id, true)}>
                                        تایید
                                    </Button>
                                    <Button danger onClick={() => handleReview(item.id, false)}>
                                        رد
                                    </Button>
                                </div>
                            )}
                        </div>
                    ))}

                    {total > PAGE_SIZE && (
                        <div className="flex justify-center">
                            <Pagination current={page} pageSize={PAGE_SIZE} total={total} onChange={setPage} showSizeChanger={false} />
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

const ZoneUsers = () => {
    const [role, setRole] = useState<"students" | "managers">("managers");
    const [items, setItems] = useState<ZoneUser[]>([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);

    const handleGetData = async () => {
        setLoading(true);
        const res = await getZoneUsers(
            { offset: (page - 1) * PAGE_SIZE, size: PAGE_SIZE },
            role
        );
        if (res.sucsess) {
            setItems(res.data.data.result);
            setTotal(res.data.data.total);
        }
        setLoading(false);
    };

    useEffect(() => {
        handleGetData();
    }, [page, role]);

    const handleChangeRole = async (user: ZoneUser) => {
        const next = user.role === "managers" ? "students" : "managers";
        const res = await setUserRole(user.id, next);
        if (res.sucsess) {
            message.success("نقش کاربر تغییر کرد");
            handleGetData();
        } else {
            message.error("انجام نشد");
        }
    };

    return (
        <div className="w-full rounded-3xl bg-white p-5 mt-2">
            <div className="mb-5 flex items-center justify-between gap-3 max-md:flex-col max-md:items-start">
                <Title text="کاربران" />
                <Segmented
                    value={role}
                    onChange={(value) => {
                        setRole(value as "students" | "managers");
                        setPage(1);
                    }}
                    options={[
                        { value: "managers", label: "معلم‌ها" },
                        { value: "students", label: "دانش‌آموزان" },
                    ]}
                />
            </div>

            <Table
                rowKey="id"
                loading={loading}
                dataSource={items}
                scroll={{ x: true }}
                pagination={{
                    current: page,
                    pageSize: PAGE_SIZE,
                    total,
                    onChange: setPage,
                    showSizeChanger: false,
                }}
                columns={[
                    { title: "نام", dataIndex: "name" },
                    { title: "نام کاربری", dataIndex: "username" },
                    { title: "شماره", dataIndex: "phone" },
                    {
                        title: "نقش",
                        dataIndex: "role",
                        render: (value: string) => ROLE_LABEL[value] ?? value,
                    },
                    {
                        title: "",
                        key: "actions",
                        render: (_: unknown, user: ZoneUser) => (
                            <Popconfirm
                                title={user.role === "managers" ? "تبدیل به دانش‌آموز؟" : "تبدیل به معلم؟"}
                                okText="بله"
                                cancelText="خیر"
                                onConfirm={() => handleChangeRole(user)}
                            >
                                <Button size="small">
                                    {user.role === "managers" ? "تبدیل به دانش‌آموز" : "تبدیل به معلم"}
                                </Button>
                            </Popconfirm>
                        ),
                    },
                ]}
            />
        </div>
    );
};

export default function Page() {
    return (
        <>
            <RoleRequests />
            <ZoneUsers />
        </>
    )
}
