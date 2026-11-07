import { QuerySize } from "../../app/(dashboardzone)/types/basics";
import { buildFormData, network } from "./network";

export const getFields = (querySize : QuerySize | null) => network(`/content/filds?offset=${querySize?.offset ?? 0}&size=${querySize?.size ?? 30}`)

export const createInstance = (data : any) =>
    network("/content/instance" , "POST" , data)


export const getInstancese = (querySize : QuerySize | null) =>
    network(`/content/instances?offset=${querySize?.offset ?? 0}&size=${querySize?.size ?? 30}`)



export const archiveInstance = (id : string) =>
    network(`/content/instance/archive/${id}` , "DELETE")

export const getInstanceFilds = (instance_id : string) =>
    network(`/content/instance/filds/${instance_id}`)


/* Entries */

export type EntryFieldValue = {
    fild_id : string
    data : {
        value : string | number | boolean | string[]
        placement : string
    }
}

export const getEntryPlacements = () =>
    network<{ result : { key : string , value : string }[] }>(`/content/entry-placements`)

export const createEntry = (data : {
    instance_id : string
    entry_type : "free" | "free_users" | "paid"
    price? : number
    categorys? : string[]
}) => network<{ result : { message : string , entry_id : string } }>("/content/entry" , "POST" , data)

export const sendEntryData = (data : { entry_id : string , filds : EntryFieldValue[] }) =>
    network("/content/senddata" , "POST" , data)

export const getMyEntries = (querySize : QuerySize | null , status? : "pendding" | "active" | "disactive") =>
    network(`/content/entry?offset=${querySize?.offset ?? 0}&size=${querySize?.size ?? 30}${status ? `&status=${status}` : ""}`)

export type EntriesSummary = {
    total : number
    pendding : number
    active : number
    disactive : number
    saves : number
    likes : number
}

/* خلاصه محتواهای معلم برای داشبورد */
export const getMyEntriesSummary = () =>
    network<{ result : EntriesSummary }>(`/content/entry/summary`)


/* Files */

export const uploadFile = (file : File) =>
    network<{ id : string , filename : string , orginal_name : string }>("/files/upload" , "POST" , buildFormData({ file }))
