import Sidebar from "../../components/sidebar/Sidebar";
import MessageContainer from "../../components/messages/MessageContainer";
import { MainBoxContainer } from "../../styles/main";

const Home = () => {
    return (
        <MainBoxContainer direction={'row'}>
			<Sidebar />
            {/* <Divider direction={'vertical'} sx={{borderColor:'rgba(70, 70, 70, .3)'}} /> */}
			<MessageContainer />
        </MainBoxContainer>
    )
}

export default Home;