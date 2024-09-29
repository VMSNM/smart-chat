import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from 'react-icons/ti';
import { useAuthContext } from "../../context/AuthContext";
import { getRandomEmoji } from '../../utils/emojis';
import { Stack } from "@mui/material";
import { BodyText, BodyTextTitle } from "../../styles/main";
import { Colors } from "../../layout/themeColors";

const MessageContainer = () => {
    const { selectedConversation, setSelectedConversation } = useConversation();

    useEffect(() => {
        // cleanup function on unMount
        return () => setSelectedConversation(null)
    }, [setSelectedConversation])

    return (
        <div className="md:min-w-[450px] flex flex-col w-full">
            { !selectedConversation ? 
                <NoChatSelected /> 
                : 
                <>
                <Stack direction={'row'} mb={2} gap={1} p={'5px 10px'} width={'100%'} sx={{background: Colors.border}}>
                    <BodyTextTitle>To:</BodyTextTitle>
                    <BodyText>{selectedConversation.fullName}</BodyText>
                </Stack>
                <Messages />
                <MessageInput />
                </>
            }
        </div>
    )
}
export default MessageContainer;

const NoChatSelected = () => {
    const { authUser } = useAuthContext();

    return (
        <div className="flex items-center justify-center w-full h-full">
            <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
                <p>Welcome {getRandomEmoji()} {authUser.fullname} {getRandomEmoji()}</p>
                <p>Select a user to start messaging</p>
                <TiMessages className='text-3xl md:text-6xl text-center' />
            </div>
        </div>
    )
}

