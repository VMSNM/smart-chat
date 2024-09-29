import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skeletons/MessageSkeleton"
import Message from "./Message";
import useListenMessages from "../../hooks/useListenMessages";

const Messages = () => {
  const { loading, messages } = useGetMessages();
  useListenMessages();
  const lastMessageRef = useRef();
  
  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({behavior: 'smooth', block: 'nearest'})
    }, 100);
  }, [messages]);

  return (
    <div className="px-4 flex-1 overflow-auto mb-6">
        { loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}

        { !loading && messages.length === 0 && (
          <p className="text-center text-gray-400">Send a message to start the conversation</p>
        )}

        { !loading && messages.length > 0 &&
          messages.map((message) => (
            <div key={message._id} ref={lastMessageRef}> 
              <Message message={message} />
            </div>
        ))}
    </div>
  )
}

export default Messages;