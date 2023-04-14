import { SigninResponse, SigninParam, SignupParam } from "../../types/api/auth"
import customAxios from "../../lib/customAxios"

class AuthApi {
    public async signIn(formData: SigninParam): Promise<SigninResponse> {
        const { data } = await customAxios.post("/auth/signin", formData)
        return data
    }
    public async signUp(formData: SignupParam): Promise<void> {
        await customAxios.post("/auth/signup", formData)
    }
}


export default new AuthApi()