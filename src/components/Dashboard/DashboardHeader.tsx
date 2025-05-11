import React from "react";
import {Header} from "./DashboardStyles";
import UserMenu from "../UserMenu/UserMenuContent.tsx";
import {useNavigate} from "react-router-dom";
import {logout} from "../../api/authApi.ts";

const DashboardHeader: React.FC = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logout();
        localStorage.removeItem("token");
        navigate("/login");
        navigate(0);
    };

    return (
        <Header>
            <span>Панель управления</span>
            <UserMenu/>
            <button onClick={handleLogout}>Выйти</button>
        </Header>
    );
};

export default DashboardHeader;
