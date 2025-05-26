import React from "react";
import DashboardHeader from "../components/Dashboard/DashboardHeader";
import DashboardContent from "../components/Dashboard/DashboardContent";
import {Wrapper} from "../components/Dashboard/DashboardStyles";

const DashboardPage: React.FC = () => {

    return (
        <Wrapper>
            <DashboardHeader/>
            <DashboardContent/>
        </Wrapper>
    );
};

export default DashboardPage;
