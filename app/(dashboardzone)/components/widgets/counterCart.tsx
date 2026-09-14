import { DollarCircleOutlined } from "@ant-design/icons"
import { Button } from "antd"
import { BadgeDollarSign } from "lucide-react"

export const CounterCart = ({bgColor , Icon , title , textColor , counter} : {bgColor : string , Icon : any , title : string , textColor : string , counter : string}) => {
    return (
        <div className={`w-full h-50  rounded-3xl m-2 relative cursor-pointer`} style={{backgroundColor : bgColor}}>
            <div className="w-full flex justify-start items-center" >
                <div className="flex justify-start items-center w-full p-5">
                    {/* <DollarCircleOutlined className="text-(--primary)!" /> */}
                        {Icon}
                    <h1 className="text-xl font-bold">
                        {title}
                    </h1>
                </div>
            </div>
            <div className="w-full flex justify-end items-end p-5 absolute bottom-2 flex-col">
                <h1 className="text-xl font-bold">
                    {counter}
                </h1>
                <div className="w-15 h-1 rounded-2xl" style={{backgroundColor : textColor}} />
                {/* <Button type="text" style={{color : textColor }}>
                    مشاهده همه
                </Button> */}
            </div>
        </div>
    )
}