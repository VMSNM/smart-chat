import { useState } from "react"
import toast from "react-hot-toast"
import { useAuthContext } from "../context/AuthContext"

const useLogin = () => {
    const [loading, setLoading] = useState(false)
    const { setAuthUser } = useAuthContext()

    const login = async (username, password) => {
        const success = handleInputErrors(username, password)
        
        if (!success) return;

        setLoading(true)
        try {
            const result = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 
                    Accept: 'application/json',
                    'Content-type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify({username, password})
            })
            const data = await result.json()
            if (data.error) {
                throw new Error(data.error)
            }

            // Local storage
            localStorage.setItem('chat-user', JSON.stringify(data))
            // Context update
            setAuthUser(data)
        
        } catch (error) {
            toast.error(error.message)
        } finally {
            setLoading(false)
        }
    }

    return { loading, login }
}

export default useLogin;

function handleInputErrors(username, password) {
    if (!username || !password) {
        toast.error('Please fill all the fields')
        return false;
    }
    return true;
}
