import { SigninResponse } from "./AuthType"
import { FormData } from "../../types/form/formData.type"
import customAxios from "../../lib/customAxios"

class AuthApi {
    public async signIn(formData: FormData): Promise<SigninResponse> {
        const { data } = await customAxios.post("/auth/signin", formData)
        return data
    }
    public async signUp(formData: FormData): Promise<void> {
        await customAxios.post("/auth/signup", formData)
    }
}


export default new AuthApi()