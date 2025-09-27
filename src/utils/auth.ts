const TOKEN_KEY = "access_token";
const USER_ID = "user_id";

export const getToken = () => {return localStorage.getItem(TOKEN_KEY) }
export const saveToken = (token:string) => {localStorage.setItem(TOKEN_KEY, token)}
export const deleteToken = () => {localStorage.removeItem(TOKEN_KEY)}

export const getUserId = () : string | null => {return localStorage.getItem(USER_ID) }
export const saveUserId = (id:string) => {localStorage.setItem(USER_ID, id)}
export const deleteUserId = () => {localStorage.removeItem(USER_ID)}

export const isAuth = () => {
    const token = getToken();
    if(!token){
        return false;
    }

    try{
        const payload = JSON.parse(atob(token.split(".")[1]));
        return Date.now() > payload.exp * 1000;
    }
    catch{
        return false;
    }
}