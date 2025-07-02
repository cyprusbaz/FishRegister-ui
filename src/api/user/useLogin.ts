import type { UserLogin, UserLoginResponse } from "../../models/user/userApi";
import { apiClient } from "../axiosInstance";
import "../../utils/auth";
import { saveToken } from "../../utils/auth";

export const handleLogin = async (loginInfo: UserLogin) => {
    try{
        console.log("here");
            const res = await apiClient.post(`User/Login`, loginInfo);
            console.log(res);
            saveToken(res.data.accessToken);
    }
    catch{
        throw new Error("Invalid credentials");
    }
}

export const check = async () => {
    try{
        const res = await apiClient.get(`${import.meta.env.BASE_URL}User/healthCheck`);
        console.log(JSON.stringify(res));
    }catch{

    }
}