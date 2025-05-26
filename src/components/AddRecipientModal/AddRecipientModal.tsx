import React, { useState } from "react";
import styled from "styled-components";
import {Button, ButtonRow, Input} from "../AddUserModal/AddUserStyles.ts";
import {createRecipient} from "../../api/recipientApi.ts";

interface Props {
    onClose: () => void;
}

const AddRecipientModal: React.FC<Props> = ({ onClose }) => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        organization: "default",
        email: "",
        phoneNumber: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async () => {
        try {
            const contactData = {
                EMAIL: formData.email,
                PHONE: formData.phoneNumber,
            };

            const data = {
                firstName: formData.firstName,
                lastName: formData.lastName,
                organization: formData.organization,
                contactData: contactData,
            }

            await createRecipient(data);

            onClose();
        } catch {
            alert("Ошибка при создании получателя");
        }
    };

    return (
        <Overlay>
            <Modal>
                <h3>Добавить получателя</h3>

                <Input
                    name="firstName"
                    placeholder="Имя"
                    value={formData.firstName}
                    onChange={handleChange}
                />
                <Input
                    name="lastName"
                    placeholder="Фамилия"
                    value={formData.lastName}
                    onChange={handleChange}
                />
                {/*<Input*/}
                {/*    name="organization"*/}
                {/*    placeholder="Организация"*/}
                {/*    value={formData.organization}*/}
                {/*    onChange={handleChange}*/}
                {/*/>*/}
                <Input
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <Input
                    name="phoneNumber"
                    placeholder="Номер телефона"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                />

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

export default AddRecipientModal;

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
    min-width: 320px;
`;
