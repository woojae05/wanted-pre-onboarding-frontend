
export interface SigninParam {
    email: string;
    password: string;
}

export interface SignupParam {
    email: string;
    password: string;
}
export interface SigninResponse {
    access_token: string;
}
