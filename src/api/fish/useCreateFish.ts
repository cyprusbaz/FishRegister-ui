import type { FishToCreate } from "../../models/fish/fish";
import { apiClient } from "../axiosInstance";

export const CreateFish = async (fish: FishToCreate) => {
  try {
    await apiClient.post("/Fish/Create", fish);
  } catch {
    throw new Error("Could not create a fish");
  }
};
