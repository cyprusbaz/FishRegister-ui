import type { Fish } from "../../models/fish/fish";
import { apiClient } from "../axiosInstance";

export const GetAllFish = async () : Promise<Fish[]> => {
    try{
            const res = await apiClient.get("/Fish/GetAll");
            return res.data;
    }
    catch{
        throw new Error("Could not retrieve fish data");
    }
}