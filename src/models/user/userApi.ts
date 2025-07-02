export interface UserLogin {
    username: string;
    password: string;
}

export interface UserLoginResponse{
    accessToken: string;
    userId: string;
}