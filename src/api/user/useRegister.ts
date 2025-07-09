import type { UserRegister } from "../../models/user/userApi";
import { apiClient } from "../axiosInstance";
import "../../utils/auth";

export const handleRegister = async (registerInfo: UserRegister) => {
    try{
            const res = await apiClient.post(`User/Register`, registerInfo);
            console.log(res.data);
    }
    catch{
        throw new Error("Invalid credentials");
    }
}