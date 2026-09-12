import { UserOutlined } from "@ant-design/icons"
import { userStor } from "../../../../../src/store/user-store/userStore"

export const DahboardSideBar = () => {
    const {userInfo} = userStor()
    return (
        <>
        <div className="w-[20%] flex justify-center items-center p-2">
            <div className="w-full h-[85vh] flex justify-center items-start bg-white rounded-2xl shadow-sm p-2">
                <div className="w-full bg-(--primary)/80 p-2 rounded-2xl flex justify-start items-center">
                    <div className="p-2 bg-white rounded-xl">
                        <UserOutlined className="text-(--primary)/80! " />
                    </div>
                    <div className="">
                        <h1 className="text-white mr-5 text-xl">
                            {userInfo?.name}
                        </h1>
                        <h1 className="text-sm text-gray-200 mr-5">
                            {
                                userInfo?.phone
                            }
                        </h1>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}