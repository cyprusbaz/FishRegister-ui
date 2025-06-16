import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.url.VITE_BASE_URL,
    withCredentials: false,
});