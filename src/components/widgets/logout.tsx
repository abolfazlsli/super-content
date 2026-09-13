import { useState } from "react"
import { CuButton } from "./buttons"
import { LogoutOutlined } from "@ant-design/icons"
import { logOut } from "../../utils/regs"
import { Modal } from "antd"

export const Logout = () =>
{
    const [logout , setLogout] = useState<boolean>(false)
    return (
        <>
        <Modal open={logout} onOk={logOut} onCancel={() => setLogout(false)} title={"خروج از سیستم"}  okText={"بله"} cancelText={"خیر"}>
            <h1>
                آیا درباره خروج از سیستم اطمینان دارید ؟
            </h1>
        </Modal>
        <div className="w-full flex justify-center items-center">
            <CuButton
                className="profileBtn bg-red-100! text-red-500!"
                icon={<LogoutOutlined />}
                onClick={() => setLogout(true)}
                size="large"
                >
                خروج
            </CuButton>
        </div>
        </>
    )
}