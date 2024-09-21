import { TabbarContainer, TabItem } from "./Tabbar.style";
import HomeIcon from "@mui/icons-material/Home";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import InfoIcon from "@mui/icons-material/Info";
import { useLocation, useNavigate } from "react-router-dom";

const Tabbar = () => {
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <TabbarContainer>
            <TabItem 
                key="홈" 
                active={location.pathname === "/home"} 
                onClick={() => navigate("/home")}
            >
                {<HomeIcon />}
            </TabItem>
            
            <TabItem 
                key="과목추가" 
                active={location.pathname === "/add-subject"} 
                onClick={() => navigate("/add-subject")}
            >
                {<AddCircleIcon />}
            </TabItem>

            <TabItem 
                key="선배들의팁" 
                active={location.pathname === "/tips"} 
                onClick={() => navigate("/tips")}
            >
                {<InfoIcon />}
            </TabItem>
            
        </TabbarContainer>
    );
};

export default Tabbar;