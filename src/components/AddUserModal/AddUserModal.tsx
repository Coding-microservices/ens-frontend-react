import React, { useState } from "react";
import styled from "styled-components";
import { createAdmin, createUser } from "../../api/usersApi.ts";
import {Button, ButtonRow, CheckboxLabel, Input, Select} from "./AddUserStyles.ts";

interface Props {
    onClose: () => void;
}

const AddUserModal: React.FC<Props> = ({ onClose }) => {
    const [role, setRole] = useState("user");
    const [formData, setFormData] = useState({
        email: "",
        firstName: "",
        lastName: "",
        phoneNumber: "",
        super: false,
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value, type } = e.target;

        if (type === "checkbox") {
            const checked = (e.target as HTMLInputElement).checked;
            setFormData((prev) => ({
                ...prev,
                [name]: checked,
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    };

    const handleSubmit = async () => {
        try {
            if (role === "admin") {
                await createAdmin(formData);
            } else {
                const { super: _, ...userData } = formData;
                await createUser(userData);
            }
            onClose();
        } catch {
            alert("Ошибка при создании пользователя");
        }
    };

    return (
        <Overlay>
            <Modal>
                <h3>Добавить пользователя</h3>

                <label>
                    Роль:
                    <Select name="role" value={role} onChange={(e) => setRole(e.target.value)}>
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                    </Select>
                </label>

                <Input name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
                <Input name="firstName" placeholder="Name" value={formData.firstName} onChange={handleChange} />
                <Input name="lastName" placeholder="Surname" value={formData.lastName} onChange={handleChange} />
                <Input name="phoneNumber" placeholder="Phone number" value={formData.phoneNumber} onChange={handleChange} />

                {role === "admin" && (
                    <CheckboxLabel>
                        <input
                            type="checkbox"
                            name="super"
                            checked={formData.super}
                            onChange={handleChange}
                        />
                        Суперадмин
                    </CheckboxLabel>
                )}

                <ButtonRow>
                    <Button onClick={handleSubmit}>Создать</Button>
                    <Button onClick={onClose} style={{ backgroundColor: "#aaa" }}>
                        Закрыть
                    </Button>
                </ButtonRow>
            </Modal>
        </Overlay>
    );
};

export default AddUserModal;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Modal = styled.div`
  background: white;
  padding: 24px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-width: 300px;
`;
