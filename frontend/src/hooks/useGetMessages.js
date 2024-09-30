import { useEffect, useState } from "react"
import useConversation from "../zustand/useConversation"
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const useGetMessages = () => {
  const [loading, setLoading] = useState('');
  const { messages, setMessages, selectedConversation } = useConversation();
  const { authUser } = useAuthContext();

  useEffect(() => {
    const getMessages = async () => {
        setLoading(true)
        try {
            /* const result = await fetch(`http://localhost:8000/api/messages/${selectedConversation._id}`, { */
            const result = await fetch(`/api/messages/${selectedConversation._id}`, {
                method: 'GET',
                headers: { 
                    Accept: 'application/json',
                    'Content-type': 'application/json' 
                },
                credentials: "include",
                /* body: JSON.stringify({authUser}), */
            })
            const data = await result.json()
    
            if (data.error) throw new Error(data.error)
            setMessages(data)
    
        } catch (error) {
            toast.error(error.message)
        } finally {
            setLoading(false)
        }
      }

      if (selectedConversation?._id) getMessages();
  }, [selectedConversation._id, setMessages])
  
  return { loading, messages }
}

export default useGetMessages