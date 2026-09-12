import { getUsersProfile } from "../services/user-auth"
import { removeCookie, setCookie } from "../services/cookie"
import { userStor } from "../store/user-store/userStore"

const {userInfo ,setUser} = userStor.getState()
export const checkUserInfo = async () => {
            const userRes = await getUsersProfile()
            if (userRes.sucsess) {
                setUser(userRes.data.data.result)
                return userRes.data.data.result
            }
            return false
}


export const logOut = () => {
    removeCookie("acsess_token")
    setUser(null)
    
}