import { apiClient } from "../axiosInstance";

export const GetAllFish = async () => {
    try{
            const res = await apiClient.get("/Fish/GetAll");
            return res;
    }
    catch{
        throw new Error("Could not retrieve fish data");
    }
}