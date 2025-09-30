import type { Fish } from "../fish/fish";

export interface FishPost{
    title: string,
    content: string,
    image: File,
    fishId: string,
    userId: string,
}

export interface GetFishPost{
    id: string,
    title: string,
    content: string, 
    image: string,
    fish: Fish,
    created: Date,
    userId: string,
}