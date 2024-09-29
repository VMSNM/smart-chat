import useLogout from "../../hooks/useLogout";
import LogoutIcon from '@mui/icons-material/Logout';
import { IconButton } from "@mui/material";
import { Colors } from "../../layout/themeColors";

const LogoutButton = () => {
    const { loading, logout } = useLogout();
    return (
        <div className="mt-1 p-4 pl-5">
            { !loading ? 
                <IconButton
                    onClick={logout}
                    title="Logout"
                    sx={{
                        color: Colors.light,
                        transition:'.8s all',
                        ':hover': {color: Colors.primary[500],}
                    }}
                >
                    <LogoutIcon sx={{fontWeight:'bold'}} />
                </IconButton>
            : 
                <span className="loading loading-spinner"></span> 
            }
        </div>
    )
}

export default LogoutButton;