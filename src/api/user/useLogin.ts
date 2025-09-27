import type { UserLogin } from "../../models/user/userApi";
import { apiClient } from "../axiosInstance";
import "../../utils/auth";
import { saveToken, saveUserId } from "../../utils/auth";

export const handleLogin = async (loginInfo: UserLogin) => {
    try{
            const res = await apiClient.post(`User/Login`, loginInfo);
            saveToken(res.data.accessToken);
            saveUserId(res.data.userID);

    }
    catch{
        throw new Error("Invalid credentials");
    }
}
