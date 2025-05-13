import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {Form, Input, Button, Error} from "./LoginStyles";
import {login} from "../../api/authApi.ts";

const LoginForm: React.FC = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        try {
            const response = await login(email, password);
            localStorage.setItem("accessToken", response.tokens.accessToken);
            localStorage.setItem("refreshToken", response.tokens.refreshToken);
            navigate("/dashboard");
            navigate(0);
        } catch {
            setError("Неверный email или пароль");
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <h2>Вход</h2>
            {error && <Error>{error}</Error>}
            <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <Input
                type="password"
                placeholder="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <Button type="submit">Войти</Button>
        </Form>
    );
};

export default LoginForm;
