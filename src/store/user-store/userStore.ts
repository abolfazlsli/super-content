import { create } from "zustand";
import { UserInfoState } from "./type";

export const userStor = create<UserInfoState>(
    (set) => (
        {
            userInfo : null ,
            setUser : (userInfo) => set({userInfo})
        }
    )
)