import React from "react";
import {Container} from "../components/Login/LoginStyles";
import LoginForm from "../components/Login/LoginForm";

const LoginPage: React.FC = () => {
    return (
        <Container>
            <LoginForm/>
        </Container>
    );
};

export default LoginPage;
