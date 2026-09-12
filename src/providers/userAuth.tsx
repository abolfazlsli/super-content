'use client'

import { message } from "antd"
import { checkUserInfo } from "../utils/regs"
import React, { useEffect } from "react"
import { useRouter } from "next/navigation"

type UserAuthProviderProps = {
    children: React.ReactNode
    messageInfo?: {
        text: string
        type: "error" | "success" | "info" | "warning"
    }
    redirect?: boolean,
    showMessage?: boolean ,
    sucsessAction? : any ,
    failAction? :any
}

export const UserAuthProvider = ({
    children,
    redirect = false,
    showMessage = false,
    messageInfo,
    sucsessAction ,
    failAction 
}: UserAuthProviderProps) => {

    const router = useRouter()

    const handleGetUser = async () => {
        try {
            const user = await checkUserInfo()

            if (!user) {
                if (showMessage && messageInfo && !failAction) {
                    switch (messageInfo.type) {
                        case "error":
                            message.error(messageInfo.text)
                            break

                        case "success":
                            message.success(messageInfo.text)
                            break

                        case "info":
                            message.info(messageInfo.text)
                            break

                        case "warning":
                            message.warning(messageInfo.text)
                            break
                    }
                }

                if (failAction) {
                    failAction()
                }

                if (redirect && !failAction) {
                    router.push("/login")
                }

                return
            }
            else {
                if (sucsessAction) {
                    sucsessAction()
                }
            }

        } catch (error) {
            console.error("Failed to check user info:", error)
        }
    }

    useEffect(() => {
        handleGetUser()
    }, [])

    return (
        <>
            {children}
        </>
    )
}