'use client'
import { useEffect } from "react";
import { Title } from "../../../../../src/components/widgets/title";
import { userStor } from "../../../../../src/store/user-store/userStore";
import { InfoBox, InputInfo } from "../../../components/widgets/input-holder";
import { checkUserInfo } from "../../../../../src/utils/regs";
import { RoleRequestInfo } from "../../../components/widgets/role-request";



export default function page() {
    const {userInfo} = userStor()
    useEffect(() => {
        checkUserInfo()
    } , [])
    return (
        <>
            <div className="w-full bg-white rounded-3xl mt-2 p-5">
                <div className="mb-5">
                    <Title text="اطلاعات فردی" />
                </div>
                <div className="w-full flex justify-around items-center max-md:flex-col">
                       <InfoBox>
                            <InputInfo label="نام" value={userInfo?.name ?? ""} />
                        </InfoBox> 
                        <InfoBox>
                            <InputInfo label="شماره تلفن" value={userInfo?.phone ?? ""} />
                        </InfoBox>
                </div>
            </div>
            <div className="w-full bg-white rounded-3xl mt-2 p-5">
                <div className="mb-5">
                    <Title text="اطلاعات حساب کاربری" />
                </div>
                <div className="w-full flex justify-around items-center max-md:flex-col">
                    
                       <InfoBox>
                            <InputInfo label="نقش" info={<RoleRequestInfo />} disable={true} value={"دانش‌آموز"} />
                        </InfoBox> 
                        <InfoBox>
                            <InputInfo label="نام کاربری " value={userInfo?.username ?? ""} />
                        </InfoBox>
                </div>
            </div>
        </>
    )
}