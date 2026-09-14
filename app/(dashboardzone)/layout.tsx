'use client'
import { message } from "antd";
import { UserAuthProvider } from "../../src/providers/userAuth";
import { useRouter } from "next/navigation";
import { DashboardHeader } from "./components/layouts/header/header";
import { DahboardSideBar } from "./components/layouts/sidebar/sideBar";

export default function RootLayout({managers , students } : {managers : React.ReactNode , students : React.ReactNode}) {
    const router = useRouter()
    return (
        <>
        <DashboardHeader />
        <UserAuthProvider failAction={() => {message.warning("ابتدا وارد شوید "); router.push("/login")}} showMessage={true}>
            <div className="w-full flex justify-start items-center dashboard-scope">
                <DahboardSideBar />
                <div className="w-[80%] h-[84vh] overflow-y-scroll cu-scroll ">
                    {students}
                </div>
            </div>
        </UserAuthProvider>
        </>
    )
}