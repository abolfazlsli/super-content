'use client'
import { message } from "antd";
import { UserAuthProvider } from "../../src/providers/userAuth";
import { useRouter } from "next/navigation";
import { DashboardHeader } from "./components/layouts/header/header";
import { DahboardSideBar } from "./components/layouts/sidebar/sideBar";
import { userStor } from "../../src/store/user-store/userStore";

export default function RootLayout({managers , students ,admin } : {managers : React.ReactNode , students : React.ReactNode , admin : React.ReactNode}) {
    const router = useRouter()
    const {userInfo} = userStor() 
    return (
        <>
        {
            userInfo &&
                <DashboardHeader {...userInfo} />
        }
        <UserAuthProvider failAction={() => {message.warning("ابتدا وارد شوید "); router.push("/login")}} showMessage={true}>
            <div className="w-full flex justify-start items-center dashboard-scope">
                <DahboardSideBar />
                <div className="w-[80%] max-md:w-full! max-md:p-5 h-[84vh] overflow-y-scroll cu-scroll ">
                    {userInfo?.role === "managers" ? managers : userInfo?.role === "students" ? students : userInfo?.role === "admin" ? admin : null}
                </div>
            </div>
        </UserAuthProvider>
        </>
    )
}