import { useState } from "react";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";
import { Box, IconButton, Stack } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { Colors } from "../../layout/themeColors";

const SearchInput = ({setShowUsers}) => {
    const [search, setSearch] = useState('')
    const { setSelectedConversation } = useConversation()
    const { conversations } = useGetConversations()

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!search) return;
        if (search.length < 3) return toast.error('Search term must be at least 3 characters long');

        const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()))
        if (conversation) {
            setSelectedConversation(conversation)
            setSearch('')
            setShowUsers(true)
        }
        else toast.error('No such user found!')
    }

    return (
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
            <Stack direction={'row'} position={'relative'} alignItems={'center'} justifyContent={'space-between'} width={'100%'}>
                <Box position={'relative'} width={{md: '95%', xs: '100%'}}>
                    <input type="text" className="input input-bordered rounded-full" 
                        placeholder="Search..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        style={{width:'100%', padding:'0 35px 0 20px', position:'relative'}}
                    />
                </Box>
                <IconButton type="submit" 
                    sx={{position:'absolute', right:'4%', color:Colors.primary[500], ':hover': {color:Colors.primary[300]}}}
                >
                    <SearchIcon sx={{fontSize:'30px'}} />
                </IconButton>
            </Stack>
        </form>
    )
}

export default SearchInput;