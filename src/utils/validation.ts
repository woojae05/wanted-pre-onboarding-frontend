import { FormData } from "../types/form/formData.type";


export const formDataValidater = (data: FormData): boolean => {
    return data.email.includes("@") && data.password.length >= 8
}
