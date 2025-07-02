const TOKEN_KEY = "";


export const getToken = () => {return localStorage.getItem(TOKEN_KEY) }
export const saveToken = (token:string) => {localStorage.setItem(TOKEN_KEY, token)}
export const deleteToken = () => {localStorage.removeIten(TOKEN_KEY)}

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