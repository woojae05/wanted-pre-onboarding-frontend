import { useRef, useEffect } from "react"

export const useForm = () => {
    const emailRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        emailRef.current?.focus();
    }, []);
    return {
        emailRef
    }
}

