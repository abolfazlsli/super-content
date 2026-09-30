import { Book, BookAIcon, BookPlus, FormInput, HeadphonesIcon, Mail, Shapes, UserPlus, Wallet } from "lucide-react";

export const ActionsCarts = [
    {
        label : "تایید دسترسی" ,
        icon : UserPlus , 
        link : "/dashboard/accept-roles"
    } , 
    {
        label : "تایید محتوا" ,
        icon : BookPlus , 
        link : "/dashboard/accept-contents"
    } ,
    {
        label : "لیست محوا ها" ,
        icon : Book , 
        link : "/dashboard/accept-contents"
    },
    {
        label : "ایجاد فیلد" ,
        icon : FormInput , 
        link : "/dashboard/accept-contents"
    } ,
    {
        label : "ایجاد نوع محتوا" ,
        icon : BookAIcon , 
        link : "/dashboard/create-instance"
    } ,
    {
        label : "نامه نگار" ,
        icon : Mail , 
        link : "/dashboard/accept-contents"
    } ,
    {
        label : "پشتیبانی" ,
        icon : HeadphonesIcon , 
        link : "/dashboard/accept-contents"
    } ,
    {
        label : "مالی" ,
        icon : Wallet , 
        link : "/dashboard/accept-contents"
    } ,
    {
        label : "تگ و دسته بندی" ,
        icon : Shapes , 
        link : "/dashboard/accept-contents"
    } ,
]