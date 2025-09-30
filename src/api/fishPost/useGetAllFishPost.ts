import { apiClient} from "../axiosInstance";
import type { GetFishPost } from "../../models/fishPost/fishPost";

export const useGetAllFishPost = async () : Promise<GetFishPost[]>  =>  {
    try{
    const res = await apiClient.get("FishPost/GetAll");
    return res.data
    }
    catch{
        throw new Error("Could not retrieve fishposts");
    }
} 