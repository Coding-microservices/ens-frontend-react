import React, {useState} from "react";
import {Form, Input, Button, Message} from "./ChangePasswordStyles";
import {changePassword} from "../../api/authApi.ts";
import {useNavigate} from "react-router-dom";

const ChangePasswordForm: React.FC = () => {
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setMessage(null);
        setSuccess(false);

        if (newPassword !== confirmPassword) {
            setMessage("Новый пароль и подтверждение не совпадают");
            return;
        }

        try {
            const responseStatus = await changePassword(currentPassword, newPassword, confirmPassword);
            if (responseStatus === 401) {
                setMessage("Ошибка при смене пароля");
                setSuccess(false);
                setCurrentPassword("");
                setNewPassword("");
                setConfirmPassword("");
            }
            if (responseStatus === 200) {
                setMessage("Пароль изменен успешно");
                setSuccess(true);
                setCurrentPassword("");
                setNewPassword("");
                setConfirmPassword("");
                localStorage.removeItem("accessToken");
                localStorage.removeItem("refreshToken");
                navigate("/login");
                navigate(0);
            }
        } catch (err: any) {
            setMessage(err.response?.data?.message || "Ошибка при смене пароля");
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <h2>Смена пароля</h2>
            <Input
                type="password"
                placeholder="Текущий пароль"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                required
            />
            <Input
                type="password"
                placeholder="Новый пароль"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
            />
            <Input
                type="password"
                placeholder="Подтвердите новый пароль"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
            />
            <Button type="submit">Сменить пароль</Button>
            {message && <Message success={success}>{message}</Message>}
        </Form>
    );
};

export default ChangePasswordForm;
