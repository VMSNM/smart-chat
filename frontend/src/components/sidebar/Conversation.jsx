import { Stack } from "@mui/material";
import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../zustand/useConversation";
import { Colors } from "../../layout/themeColors";
import { BodyTextTitle } from "../../styles/main";

const Conversation = ({conversation, emoji, lastIndex}) => {
    const { selectedConversation, setSelectedConversation } = useConversation();
    const isSelected = selectedConversation?._id === conversation._id;

    const { onlineUsers } = useSocketContext();
    const isOnline = onlineUsers.includes(conversation._id)

    return (
        <>
        <Stack 
            direction={'row'}
            alignItems={'center'}
            gap={1}
            sx={{
                width:'100%',
                background: isSelected ? Colors.primary[500] : '',
                cursor:'pointer',
                padding:'7px 15px 5px 15px',
                transition: '.8s all',
                ':hover': {
                    background: Colors.primary[500]
                } 
            }}
            onClick={() => setSelectedConversation(conversation)}
        >
            <div className={`avatar ${isOnline ? 'online' : ''}`}>
                <div className='w-12 rounded-full'>
                    <img src={conversation.profilePic} />
                </div>
            </div>
            <div className='flex flex-col flex-1'>
                <div className='flex gap-3 justify-between'>
                    <BodyTextTitle>{conversation.fullName}</BodyTextTitle>
                    <span className='text-xl'>{emoji}</span>
                </div>
            </div>
        </Stack>
        {/* { !lastIndex && <div className="divider my-0 py-0 h-1" /> } */}
        </>
    )
}

export default Conversation;