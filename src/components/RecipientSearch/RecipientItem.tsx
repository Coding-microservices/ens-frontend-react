import React, { useState } from "react";
import styled from "styled-components";

interface Props {
    recipient: any;
}

const RecipientItem: React.FC<Props> = ({ recipient }) => {
    const [expanded, setExpanded] = useState(false);
    const [editable, setEditable] = useState(recipient);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name === 'EMAIL' || name === 'PHONE') {
            setEditable((prev: any) => ({
                ...prev,
                contactData: {
                    ...prev.contactData,
                    [name]: value,
                },
            }));
        } else {
            setEditable((prev: any) => ({
                ...prev,
                [name]: value,
            }));
        }
    };

    const handleSave = () => {
        // TODO: call PATCH /api/v1/recipient/{id}
        alert("Сохранили (заглушка)");
    };

    return (
        <Container>
            <Summary onClick={() => setExpanded(!expanded)}>
                <span>{recipient.firstName} {recipient.lastName}</span>
                <Meta>id: {recipient.id}, email: {recipient.contactData.EMAIL}, phone: {recipient.contactData.PHONE}</Meta>
            </Summary>
            {expanded && (
                <Details style={{ marginTop: 8 }}>
                    <Input placeholder="First name" name="firstName" value={editable.firstName} onChange={handleChange} />
                    <Input placeholder="Last name" name="lastName" value={editable.lastName} onChange={handleChange} />
                    <Input placeholder="Email" name="EMAIL" value={editable.contactData.EMAIL} onChange={handleChange} />
                    <Input placeholder="Phone number" name="PHONE" value={editable.contactData.PHONE} onChange={handleChange} />
                    {/*<Input name="organization" value={editable.organization} onChange={handleChange} />*/}
                    <SaveButton onClick={handleSave}>Сохранить</SaveButton>
                </Details>
            )}
        </Container>
    );
};

export default RecipientItem;

const Container = styled.div`
    border: 1px solid #ccc;
    padding: 16px;
    border-radius: 12px;
    background-color: #f9f9f9;
    transition: box-shadow 0.2s ease;

    &:hover {
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.05);
    }
`;

const Summary = styled.div`
    font-size: 1.1rem;
    cursor: pointer;
    display: flex;
    flex-direction: column;
`;

const Details = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 16px;
`;

const Input = styled.input`
    padding: 8px;
    border-radius: 8px;
    border: 1px solid #ddd;
    font-size: 0.95rem;

    &:focus {
        outline: none;
        border-color: #1976d2;
        box-shadow: 0 0 0 2px rgba(25, 118, 210, 0.2);
    }
`;

const Meta = styled.div`
    color: #666;
    font-size: 0.95rem;
    margin-top: 4px;
`;

const SaveButton = styled.button`
    align-self: flex-start;
    margin-top: 8px;
    padding: 8px 16px;
    background-color: #4caf50;
    color: white;
    font-weight: 500;
    border: none;
    border-radius: 8px;
    cursor: pointer;

    &:hover {
        background-color: #43a047;
    }
`;
