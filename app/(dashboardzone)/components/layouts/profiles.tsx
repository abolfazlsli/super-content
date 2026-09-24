'use client'

import { Avatar, Space } from "antd"
import { User2 } from "lucide-react"

export const BuyFromProfiles = ({name , id , ownerHover , curentOwnerId , frized , setFrized } : {name : string , id : number , ownerHover : (data : number | null) => void , curentOwnerId : number | null , frized : boolean , setFrized : (inp : boolean) => void}) => {
    return (
        <div className={"w-full relative overflow-hidden"} 
        onMouseEnter={() => !frized && ownerHover(id)}
        onMouseLeave={() => !frized &&  ownerHover(null)}
        onClick={() => {(frized && id === curentOwnerId) ? setFrized(false) : setFrized(true); ownerHover(id)}}
        >
            <div className={`flex-col justify-center items-center flex m-5 mt-9 cursor-pointer hover:scale-105 duration-150`} >
                <Avatar size={50} icon={<User2 />} className={`${(frized && id === curentOwnerId) && "ring-3 ring-(--primary)"}`} />
                <h1 className="text-sm text-center mt-2">
                    {name}
                </h1>
            </div>
        </div>
    )
}