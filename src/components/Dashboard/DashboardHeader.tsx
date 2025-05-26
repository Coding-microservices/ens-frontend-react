import React from "react";
import {ButtonGroup, Header, NavButton, Title} from "./DashboardStyles";
import UserMenu from "../UserMenu/UserMenuContent.tsx";
import {useNavigate} from "react-router-dom";

const DashboardHeader: React.FC = () => {
    const navigate = useNavigate();



    return (
        <Header>
            <Title>Dashboard</Title>
            <ButtonGroup>
                <NavButton onClick={() => navigate("/dashboard")}>Incidents</NavButton>
                <NavButton onClick={() => navigate("/notifications")}>Notifications</NavButton>
                <NavButton onClick={() => navigate("/users")}>Users</NavButton>
                <NavButton onClick={() => navigate("/recipients")}>Recipients</NavButton>
                <NavButton onClick={() => navigate("/templates")}>Templates</NavButton>
                <UserMenu/>
                {/*<NavButton onClick={handleLogout}>Logout</NavButton >*/}
            </ButtonGroup>
        </Header>
    );
};

export default DashboardHeader;
