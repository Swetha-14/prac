import { useState } from "react"

type Errors = {
    name?: string,
    email?: string
}


export const useValidatedInput = (name: string, email: string) => {
    const [errors, setErrors] = useState<Errors>({})


    const validate = () => {
        const emailRegex = /^[\w.!#$%&'*+/=?^`{|}~-]+@[a-z\d](?:[a-z\d-]{0,61}[a-z\d])?(?:\.[a-z\d](?:[a-z\d-]{0,61}[a-z\d])?)*$/i;
        const newErrors: Errors = {}
        if (!name.trim()) newErrors.name = "Name cant be empty"
        if (!email.trim()) newErrors.email = "Email cant be empty"
        else if (!emailRegex.test(email)) newErrors.email = "Email cant be invalid"

        setErrors(newErrors)

        return Object.keys(newErrors).length === 0
    }

    return { errors, validate }

}