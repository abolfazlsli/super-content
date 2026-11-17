'use client'
import { message } from "antd";
import { UserAuthProvider } from "../../src/providers/userAuth";
import { useRouter } from "next/navigation";
import ZoneProviders from "../zone-providers";

export default function RootLayout({children} : {children : React.ReactNode}) {
    const router = useRouter()
    return (
        <ZoneProviders zone="landing">
            <UserAuthProvider sucsessAction={() => {message.success("شما قبلا وارد شدید"); router.push("/")}} showMessage={true} messageInfo={{
                text : "برای استفاده ابتدا لاگین کنید" ,
                type : "info"
            }}>
                <div className="w-full landings-scope">
                    {children}
                </div>
            </UserAuthProvider>
        </ZoneProviders>
    )
}
