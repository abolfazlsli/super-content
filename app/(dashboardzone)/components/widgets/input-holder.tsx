'use client'

import { Input, Popover } from "antd"
import { useEffect, useState } from "react"
import { CuButton } from "../../../../src/components/widgets/buttons"
import { BadgeInfoIcon, Edit, Info, X } from "lucide-react"
import { checkUserInfo } from "../../../../src/utils/regs"

type InputInfoProps = {
    label : string
    value : string
    placeholder? : string
    disable? : boolean
    info? : string | React.ReactElement
    onChange? : (inp : any) => void
}

export const InfoBox = ({children} : {children : React.ReactNode}) => {
    return (
        <div className="w-[50%] p-2 max-md:w-full">
            {children}
        </div>
    )
}


export const InputInfo = ({label , value , onChange , placeholder , disable = false , info} : InputInfoProps) => {
    const [onEdit , setOnEdit] = useState<boolean>(false)
    const [newValue , setNewValue] = useState<any>()
    useEffect(() => {
        setNewValue(value)
    } , [])
    const handleOnChange = (e : any) => {
        setNewValue(e.target.value)
    }
    const saveChanges = () => {
        if (onChange) {
            onChange(newValue)
        }
        setOnEdit(false)
    }
    return (
        <>
            <div className={`w-full p-5 ring-1 ring-gray-200 rounded-3xl bg-white ${disable && "cursor-not-allowed"}`}>
                <h1>
                    {
                        label
                    }
                </h1>
                {
                !onEdit ?
                    <div className="w-full flex justify-between items-center">
                        <h1 className="font-bold">
                            {
                                (value || value.length > 0) ? value : "بدون مقدار"
                            }
                        </h1>
                        <div className="flex justify-center items-center">
                            <div className={`w-10 h-10 ${disable ? "cursor-not-allowed" : "cursor-pointer"}`} onClick={() => !disable && setOnEdit(true)}>
                                {
                                    (info) &&
                                    <Popover content={info}>
                                        <BadgeInfoIcon className="mr-2" />
                                    </Popover>
                                }
                            </div>
                            <div className={`w-10 h-10 ${disable ? "cursor-not-allowed" : "cursor-pointer"}`} onClick={() => !disable && setOnEdit(true)}>
                                    <Popover content={disable ? `تغیر فیلد ${label} ممکن نیست` : `تغیر فیلد ${label}`}>
                                        <Edit />
                                    </Popover>
                            </div>
                        </div>
                    </div>
                :
                    <div className="flex justify-center items-center">
                        <Input onChange={(e) => handleOnChange(e)} placeholder={placeholder ?? "مثداری را وارد کنید"} value={newValue} />
                        <Popover content={"لغو"} trigger={"hover"}>
                            <CuButton type="primary" className="bg-red-400! w-10! p-1! mr-2" onClick={() => setOnEdit(false)}>
                                <X />
                            </CuButton>
                        </Popover>
                        <CuButton className="mr-2" type="primary" onClick={saveChanges}>
                            تایید
                        </CuButton>
                    </div>

                }
            </div>
        </>
    )
}