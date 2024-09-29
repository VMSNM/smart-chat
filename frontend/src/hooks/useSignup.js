import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useSignup = () => {
    const [loading, setLoading] = useState(false)
    const { setAuthUser } = useAuthContext()

    const signup = async ({fullName, username, password, confirmPassword, gender}) => {
        const success = handleInputErrors({fullName, username, password, confirmPassword, gender})
        
        if (!success) return;

        setLoading(true)
        try {
            const result = await fetch('https://smart-chatapp.onrender.com/api/auth/signup', {
                method: 'POST',
                headers: { 
                    Accept: 'application/json',
                    'Content-type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify({fullName, username, password, confirmPassword, gender})
            })

            const data = await result.json();
            if (data.error) {
                throw new Error(data.error);
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
    };

    return { loading, signup }
};

export default useSignup;

function handleInputErrors({fullName, username, password, confirmPassword, gender}) {
    if (!fullName || !username || !password || !confirmPassword || !gender) {
        toast.error('Please fill all the fields')
        return false;
    }
    if (password !== confirmPassword) {
        toast.error(`Passwords don't match`)
        return false;
    }
    if (password.length < 6) {
        toast.error(`Password must be at least 6 characters`)
        return false;
    }
    return true;
}