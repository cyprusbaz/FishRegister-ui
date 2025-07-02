import axios from 'axios';
import {getToken} from "../utils/auth"
export const apiClient = axios.create({
    baseURL: `${import.meta.env.VITE_BASE_URL}`,
    withCredentials: false,
});

apiClient.interceptors.request.use((config) => {
    const token = getToken();

    if(token){
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config
})





