import type { UserLogin, UserLoginResponse } from "../../models/user/userApi";
import { apiClient } from "../axiosInstance";
import "../../utils/auth";
import { saveToken } from "../../utils/auth";

export const handleLogin = async (loginInfo: UserLogin) => {
    try{
            const res = await apiClient.post(`User/Login`, loginInfo);
            saveToken(res.data.accessToken);
    }
    catch{
        throw new Error("Invalid credentials");
    }
}
