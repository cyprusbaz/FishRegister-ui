export interface UserLogin {
    username: string;
    password: string;
}

export interface UserLoginResponse{
    accessToken: string;
    userId: string;
}

export interface UserRegister{
    username: string;
    password: string;
    email: string;
    name: string;
    surname: string;
}