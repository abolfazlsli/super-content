"use client"

import { useState } from "react"
import { Eye, EyeOff, LockKeyhole, Mail, User, User2 } from "lucide-react"
import { Button } from "antd"
import Input from "../components/widgets/input"
import { createUsersLogin } from "../../services"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function Page() {
    const [showPassword, setShowPassword] = useState(false)
    const [username , setUsername] = useState<any> ()
    const [password , setPassword] = useState<any>()
    const router = useRouter()
    const handleLogin = async () => {
        // const res = await createUsersLogin({
        //     username : username ,
        //     password : password
        // })
        localStorage.setItem("username" , "ابوالفضل صالحی")
        router.push("/")
    }
    return (
        <main
            dir="rtl"
            className="min-h-screen w-full bg-gray-50 flex items-center justify-center px-4"
        >
            <div className="w-full max-w-md">
                {/* Logo / Brand */}
                <div className="text-center mb-8">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-(--primary) text-white shadow-sm">
                        <LockKeyhole size={24} strokeWidth={1.8} />
                    </div>

                    <h1 className="text-2xl font-bold tracking-tight text-gray-900">
                        خوش آمدید
                    </h1>

                    <p className="mt-2 text-sm text-gray-500">
                        برای ورود به حساب کاربری خود وارد شوید
                    </p>
                </div>

                {/* Card */}
                <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm sm:p-8">
                    <form className="space-y-5">
                        {/* Email */}
                        <div>
                            <label
                                htmlFor="email"
                                className="mb-2 block text-sm font-medium text-gray-700"
                            >
                                نام کاربری / شماره تلفن
                            </label>

                            <Input onChange={(e) => setUsername(e.target.value)} icon={<User2 />} placeholder="نام کاربری یا شماره تلفن را وارد کنید" />
                        </div>

                        {/* Password */}
                        <div>
                            <div className="mb-2 flex items-center justify-between">
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    رمز عبور
                                </label>

                                <Button
                                    type="text"
                                    className="text-xs font-medium text-gray-500 transition hover:text-gray-900"
                                >
                                    رمز عبور را فراموش کرده‌اید؟
                                </Button>
                            </div>

                            <div className="relative">
                                <LockKeyhole
                                    size={19}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                                />

                                <input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="رمز عبور خود را وارد کنید"
                                    className="h-12 w-full rounded-xl border border-gray-200 bg-gray-50 pr-11 pl-11 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-gray-900 focus:bg-white focus:ring-2 focus:ring-gray-900/5"
                                />

                                <Button
                                    type="text"
                                    onClick={() => setShowPassword(!showPassword)}
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

                        {/* Remember */}
                        <div className="flex items-center gap-2">
                            <input
                                id="remember"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 accent-(--primary)"
                            />

                            <label
                                htmlFor="remember"
                                className="cursor-pointer text-sm text-gray-600"
                            >
                                مرا به خاطر بسپار
                            </label>
                        </div>

                        {/* Submit */}
                        <Button
                            type="primary"
                            size="large"
                            className="h-12 w-full rounded-xl bg-(--primary)! text-sm font-semibold text-white transition hover:bg-black active:scale-[0.99]"
                             onClick={() => handleLogin()}
                        >
                            ورود به حساب
                        </Button>
                    </form>

                    {/* Register */}
                    <div className="mt-6 border-t border-gray-100 pt-6 text-center">
                        <span className="text-sm text-gray-500">
                            حساب کاربری ندارید؟
                        </span>
                        <Link href={"/register"}>
                            <Button
                                type="text"
                                className="mr-1! text-sm! font-semibold! hover:underline! text-(--primary)!"
                            
                            >
                                ثبت‌نام کنید
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Footer */}
                <p className="mt-6 text-center text-xs text-gray-400">
                    با ورود به حساب، شرایط استفاده و حریم خصوصی را می‌پذیرید.
                </p>
            </div>
        </main>
    )
}