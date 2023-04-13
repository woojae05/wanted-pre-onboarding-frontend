import { useRef, useEffect } from "react"
import { IUseForm } from "../types/useFormType"

export const useForm = () => {
    const emaliRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        emaliRef.current?.focus();
    }, []);
    return {
        emaliRef
    }
}

