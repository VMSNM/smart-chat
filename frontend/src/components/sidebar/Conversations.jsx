import useGetConversations from "../../hooks/useGetConversations";
import Conversation from "./Conversation";
import { getRandomEmoji } from '../../utils/emojis';
import { Stack } from "@mui/material";

const Conversations = () => {
    const { loading, conversations } = useGetConversations()
    return (
        <Stack
            py={2}
            overflow={'auto'}
            justifyContent={'space-between'}
            alignItems={'space-between'}
        >
            { conversations.map((conversation, idx) => (
                <Conversation 
                    key={conversation._id} 
                    conversation={conversation} 
                    emoji={getRandomEmoji()} 
                    lastIndex={idx === conversations.length - 1}
                />
            ))}
            { loading ? <span className="loading loading-spinner mx-auto"></span> : null }
        </Stack>
    )
}

export default Conversations;