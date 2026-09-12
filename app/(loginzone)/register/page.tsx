"use client"

import { useState } from "react"
import {
    Eye,
    EyeOff,
    LockKeyhole,
    Phone,
    User,
    User2,
} from "lucide-react"
import { Button } from "antd"
import Input from "../../../src/components/widgets/input"

import { useRouter } from "next/navigation"

import { setCookie } from "../../../src/services/cookie"
import { userStor } from "../../../src/store/user-store/userStore"
import { checkUserInfo } from "../../../src/utils/regs"
import { createUsersRegister } from "../../../src/services/user-auth"

export default function Page() {
    const [showPassword, setShowPassword] = useState(false)
    const router = useRouter()
    const [form, setForm] = useState({
        name: "",
        username: "",
        phone: "",
        password: "",
    })

    const handleChange = (field: keyof typeof form, value: string) => {
        setForm((prev) => ({
            ...prev,
            [field]: value,
        }))
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const res = await createUsersRegister({...form})
        if (res.sucsess) {
            setCookie("acsess_token" , res.data.data.result.token)
            router.push("/")
        }
    }

    return (
        <main
            dir="rtl"
            className="min-h-screen w-full bg-gray-50 flex items-center justify-center px-4 py-8"
        >
            <div className="w-full max-w-md">

                {/* Logo / Brand */}
                <div className="mb-8 text-center">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-(--primary) text-white shadow-sm">
                        <User size={24} strokeWidth={1.8} />
                    </div>

                    <h1 className="text-2xl font-bold tracking-tight text-gray-900">
                        ایجاد حساب کاربری
                    </h1>

                    <p className="mt-2 text-sm text-gray-500">
                        اطلاعات خود را وارد کنید تا حساب کاربری شما ایجاد شود
                    </p>
                </div>

                {/* Card */}
                <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm sm:p-8">
                    <form
                        onSubmit={handleSubmit}
                        className="space-y-5"
                    >

                        {/* Name */}
                        <div>
                            <label className="mb-2 block text-sm font-medium text-gray-700">
                                نام و نام خانوادگی
                            </label>

                            <Input
                                icon={<User2 />}
                                placeholder="نام و نام خانوادگی را وارد کنید"
                                value={form.name}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                    handleChange("name", e.target.value)
                                }
                            />
                        </div>

                        {/* Username */}
                        <div>
                            <label className="mb-2 block text-sm font-medium text-gray-700">
                                نام کاربری
                            </label>

                            <Input
                                icon={<User2 />}
                                placeholder="نام کاربری خود را وارد کنید"
                                value={form.username}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                    handleChange("username", e.target.value)
                                }
                            />
                        </div>

                        {/* Phone */}
                        <div>
                            <label className="mb-2 block text-sm font-medium text-gray-700">
                                شماره تلفن
                            </label>

                            <Input
                                icon={<Phone />}
                                placeholder="مثلاً 09123456789"
                                type="tel"
                                dir="ltr"
                                value={form.phone}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                    handleChange("phone", e.target.value)
                                }
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label className="mb-2 block text-sm font-medium text-gray-700">
                                رمز عبور
                            </label>

                            <div className="relative">
                                <LockKeyhole
                                    size={19}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                                />

                                <input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="رمز عبور خود را وارد کنید"
                                    value={form.password}
                                    onChange={(e) =>
                                        handleChange("password", e.target.value)
                                    }
                                    className="h-12 w-full rounded-xl border border-gray-200 bg-gray-50 pr-11 pl-11 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-gray-900 focus:bg-white focus:ring-2 focus:ring-gray-900/5"
                                />

                                <Button
                                    htmlType="button"
                                    type="text"
                                    onClick={() =>
                                        setShowPassword((prev) => !prev)
                                    }
                                    className="absolute! left-4! top-1/2! -translate-y-1/2 text-gray-400 transition hover:text-gray-700"
                                    aria-label={
                                        showPassword
                                            ? "مخفی کردن رمز عبور"
                                            : "نمایش رمز عبور"
                                    }
                                >
                                    {showPassword ? (
                                        <EyeOff size={19} />
                                    ) : (
                                        <Eye size={19} />
                                    )}
                                </Button>
                            </div>
                        </div>

                        {/* Submit */}
                        <Button
                            htmlType="submit"
                            type="primary"
                            size="large"
                            className="h-12! w-full! rounded-xl! bg-(--primary)! text-sm! font-semibold! text-white transition hover:bg-black! active:scale-[0.99]"
                        >
                            ایجاد حساب کاربری
                        </Button>
                    </form>

                    {/* Login */}
                    <div className="mt-6 border-t border-gray-100 pt-6 text-center">
                        <span className="text-sm text-gray-500">
                            قبلاً حساب کاربری ساخته‌اید؟
                        </span>

                        <Button
                            type="text"
                            className="mr-1! text-sm! font-semibold! text-(--primary)! hover:underline!"
                        >
                            وارد شوید
                        </Button>
                    </div>
                </div>

                {/* Footer */}
                <p className="mt-6 text-center text-xs text-gray-400">
                    با ثبت‌نام، شرایط استفاده و حریم خصوصی را می‌پذیرید.
                </p>
            </div>
        </main>
    )
}