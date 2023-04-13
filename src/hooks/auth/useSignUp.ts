import React, { useState, useEffect } from "react";
import { FormData } from "../../types/form/formData.type";
import { formDataValidater } from "../../utils/validation";
import { useNavigate } from "react-router-dom";

import AuthApi from "../../api/auth/Auth.api";
import { AxiosError } from "axios";

const useSignUp = () => {
    const [userInfo, setUserInfo] = useState<FormData>({
        email: "",
        password: "",
    });

    const [isValid, setIsValid] = useState<boolean>(false)

    useEffect(() => {
        setIsValid(formDataValidater(userInfo))
    }, [userInfo])
    const navigate = useNavigate()

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        try {
            await AuthApi.signUp(userInfo);
            window.alert("회원가입 성공");
            navigate("/signin");
        } catch (error) {
            if (error instanceof AxiosError) {
                const errorMesage = error?.response?.data.message
                window.alert(errorMesage);
            }
        }
    }

    const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        setUserInfo((prev) => ({ ...prev, [target.name]: target.value }))
    }

    return {
        isValid,
        userInfo,
        handleSubmit,
        handleChange
    }
}


export default useSignUp
