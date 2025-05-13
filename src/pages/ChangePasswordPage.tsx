import React from "react";
import ChangePasswordForm from "../components/ChangePassword/ChangePasswordForm";
import {Wrapper} from "../components/Dashboard/DashboardStyles.ts";
import DashboardHeader from "../components/Dashboard/DashboardHeader.tsx";

const ChangePasswordPage: React.FC = () => {
    return (
        <Wrapper>
            <DashboardHeader/>
            <ChangePasswordForm/>;
        </Wrapper>
    )
};

export default ChangePasswordPage;
