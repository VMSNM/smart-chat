import { Divider, Stack, Switch, Typography } from "@mui/material";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";
import './Sidebar.css'
import { useState } from "react";
import { Colors } from "../../layout/themeColors";

const Sidebar = () => {
    const [showUsers, setShowUsers] = useState(true);

    return (
        <Stack
            minWidth={'275px'}
            borderRight={{sm:'0', md:'1px solid rgba(70, 70, 70, .3)'}}
            alignContent={'space-between'}
        >
            <SearchInput setShowUsers={setShowUsers} />
            <div className="divider px-3"></div>
                <Stack direction={'row'} alignItems={'center'} justifyContent={'flex-end'} gap={.5} mb={1} mr={1.5}
                    sx={{display: {md:'none', xs: 'flex'}}}
                >
                    <Typography variant="caption" sx={{color: `${Colors.light} !important`}}>
                        { showUsers ? 'Hide users' : 'Show users' } 
                    </Typography>
                    <Switch 
                        checked={showUsers} 
                        size='small'
                        onChange={() => setShowUsers(!showUsers)} 
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                </Stack>
                { showUsers && (
                    <>
                    <Conversations />
                    </>
                )}
                <Divider variant="middle" sx={{borderColor:'rgba(70, 70, 70, .3)'}} />
                <LogoutButton />
        </Stack>
    )
}

export default Sidebar;