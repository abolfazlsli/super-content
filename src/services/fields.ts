import { QuerySize } from "../../app/(dashboardzone)/types/basics";
import { network } from "./network";

export const getFields = (querySize : QuerySize | null) => network(`/content/filds?offset=${querySize?.offset ?? 0}&size=${querySize?.size ?? 30}`)

export const createInstance = (data : any) => 
    network("/content/instance" , "POST" , data)


export const getInstancese = (querySize : QuerySize | null) => 
    network(`/content/instances?offset=${querySize?.offset ?? 0}&size=${querySize?.size ?? 30}`)



export const archiveInstance = (id : string) => 
    network(`/content/instance/archive/${id}` , "DELETE")

export const getInstanceFilds = (instance_id : string) => 
    network(`/content/instance/filds/${instance_id}`)