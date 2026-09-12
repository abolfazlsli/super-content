export type UserInfo = {
    name : string 
    username : string
    phone : string
}

export type UserInfoState = {
    userInfo :  UserInfo | null
    setUser : (userInfo : UserInfo | null) => void
}