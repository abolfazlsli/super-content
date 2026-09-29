import Link from "next/link"

export const ActionCart = ({actionText , icon , link} : {actionText : string , icon : React.ReactNode , link : string}) => {
    return (
        <> 
        <Link href={link}>
            <div className="w-30 h-30 flex justify-evenly items-center flex-col rounded-3xl bg-white text-gray-400 hover:text-blue-400 duration-150 hover:scale-110 shadow-blue-50 hover:shadow-2xl hover:ring-1 ring-blue-100 m-1">
                {icon}
                <h1 className="text-center">
                    {actionText}
                </h1>
            </div>
        </Link>
        </>
    )
}