'use client'

import { Button, Tag, message } from "antd"
import { useEffect, useState } from "react"
import { createRoleRequest, getMyRoleRequest, RoleRequest } from "../../../../src/services/users"

const STATUS_LABEL: Record<RoleRequest["status"], { label: string, color: string }> = {
    pendding: { label: "در انتظار بررسی", color: "orange" },
    accepted: { label: "تایید شده", color: "green" },
    rejected: { label: "رد شده", color: "red" },
}

/* درخواست تغییر نقش دانش‌آموز به معلم */
export const RoleRequestInfo = () => {
    const [request, setRequest] = useState<RoleRequest | null>(null)
    const [loading, setLoading] = useState(false)

    const handleGetData = async () => {
        const res = await getMyRoleRequest()
        if (res.sucsess) setRequest(res.data.data.result)
    }

    useEffect(() => {
        handleGetData()
    }, [])

    const handleSend = async () => {
        setLoading(true)
        const res = await createRoleRequest()
        setLoading(false)
        if (res.sucsess) {
            message.success("درخواست شما ثبت شد")
            handleGetData()
        } else {
            message.error("ثبت درخواست انجام نشد")
        }
    }

    return (
        <div className="flex flex-col gap-2 text-sm">
            <span>برای تغییر نقش به معلم درخواست ثبت کنید</span>
            {request && (
                <span>
                    آخرین درخواست: <Tag color={STATUS_LABEL[request.status].color}>{STATUS_LABEL[request.status].label}</Tag>
                </span>
            )}
            <Button
                type="primary"
                size="small"
                loading={loading}
                disabled={request?.status === "pendding"}
                onClick={handleSend}
            >
                درخواست نقش معلم
            </Button>
        </div>
    )
}
