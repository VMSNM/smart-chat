import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast"

const useLogout = () => {
  const [loading, setLoading] = useState(false)
  const { setAuthUser } = useAuthContext()

  const logout = async () => {
    setLoading(true)
    try {
        const result = await fetch('https://smart-chatapp.onrender.com/api/auth/logout', {
            method: 'POST',
            headers: { 
                Accept: 'application/json',
                'Content-type': 'application/json',
            },
            credentials: 'include',
        })
        const data = await result.json()
        if (data.error) {
            throw new Error(data.error)
        }

        localStorage.removeItem('chat-user')
        setAuthUser(null)
    } catch (error) {
        toast.error(error.message)
    } finally {
        setLoading(false)
    }
  }

  return { loading, logout };
}

export default useLogout;