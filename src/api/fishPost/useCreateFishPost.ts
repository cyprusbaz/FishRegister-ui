import axios from "axios";
import type { FishPost } from "../../models/fishPost/fishPost";
import { apiClient } from "../axiosInstance";

export const useCreateFishPost = async (fishPost: FishPost) => {
  try {
    const formData = new FormData();
    formData.append("title", fishPost.title);
    formData.append("content", fishPost.content);
    formData.append("fishId", fishPost.fishId);
    formData.append("userId", fishPost.userId);
    formData.append("image", fishPost.image);

    await apiClient.post("FishPost/Create", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  } catch {
    throw new Error("Could't create Fish Post");
  }
};
