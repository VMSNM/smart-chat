import { useState } from "react"
import useConversation from "../zustand/useConversation"
import { useAuthContext } from "../context/AuthContext"
import toast from "react-hot-toast"

const useSendMessage = () => {
    const [loading, setLoading] = useState(false)
    const { messages, setMessages, selectedConversation } = useConversation()
    const { authUser } = useAuthContext()
    
    const sendMessage = async (message) => {
        setLoading(true)
        try {
            const result = await fetch(`https://smart-chatapp.onrender.com/api/messages/send/${selectedConversation._id}`, {
                method: 'POST',
                headers: { 
                    Accept: 'application/json',
                    'Content-type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify({message, authUser}),
            })
            const data = await result.json()

            if (data.error) {
                throw new Error(data.error)
            }
            setMessages([...messages, data])

        } catch (error) {
            toast.error(error.message)
        } finally {
            setLoading(false)
        }
    }
    return { loading, sendMessage }
}

export default useSendMessage;