import { TabbarContainer, TabItem, TabIconWrapper } from "./Tabbar.style";
import HomeIcon from "@mui/icons-material/Home";
import AssessmentIcon from "@mui/icons-material/Assessment";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

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
                <TabIconWrapper active={location.pathname === "/home"}>
                    <HomeIcon fontSize="medium" />
                </TabIconWrapper>
            </TabItem>

            <TabItem
                key="분석결과"
                active={location.pathname === "/reports"}
                onClick={() => navigate("/reports")}
            >
                <TabIconWrapper active={location.pathname === "/reports"}>
                    <AssessmentIcon fontSize="medium" />
                </TabIconWrapper>
            </TabItem>

            <TabItem
                key="추가"
                active={location.pathname === "/add"}
                onClick={() => navigate("/add")}
            >
                <TabIconWrapper active={location.pathname === "/add"}>
                    <AddCircleIcon fontSize="medium" />
                </TabIconWrapper>
            </TabItem>

            <TabItem
                key="팁"
                active={location.pathname === "/tips"}
                onClick={() => navigate("/tips")}
            >
                <TabIconWrapper active={location.pathname === "/tips"}>
                    <TipsAndUpdatesIcon fontSize="medium" />
                </TabIconWrapper>
            </TabItem>

            <TabItem
                key="더보기"
                active={location.pathname === "/more"}
                onClick={() => navigate("/more")}
            >
                <TabIconWrapper active={location.pathname === "/more"}>
                    <MoreHorizIcon fontSize="medium" />
                </TabIconWrapper>
            </TabItem>
        </TabbarContainer>
    );
};

export default Tabbar;