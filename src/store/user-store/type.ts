export type UserInfo = {
    name : string 
    username : string
    phone : string
    role : "managers" | "students" | "admin"
}

export type UserInfoState = {
    userInfo :  UserInfo | null
    setUser : (userInfo : UserInfo | null) => void
}