import React, {useState} from "react";
import styled from "styled-components";

interface Props {
    user: any;
}

const UserItem: React.FC<Props> = ({user}) => {
    const [expanded, setExpanded] = useState(false);
    const [editableUser, setEditableUser] = useState(user);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setEditableUser((prev: any) => ({...prev, [name]: value}));
    };

    const handleSave = () => {
        // TODO: call update API
        alert("Сохранили (заглушка)");
    };

    return (
        <Container>
            <Summary onClick={() => setExpanded(!expanded)}>
                <span>{user.firstName} {user.lastName}</span>
                <Meta>{user.email} — <Role>{user.role}</Role></Meta>
            </Summary>

            {expanded && (
                <Details>
                    <Input name="email" value={editableUser.email} onChange={handleChange} placeholder="Email"/>
                    <Input name="firstName" value={editableUser.firstName} onChange={handleChange} placeholder="Имя"/>
                    <Input name="lastName" value={editableUser.lastName} onChange={handleChange} placeholder="Фамилия"/>
                    <Input name="phoneNumber" value={editableUser.phoneNumber} onChange={handleChange}
                           placeholder="Телефон"/>
                    <SaveButton onClick={handleSave}>Сохранить</SaveButton>
                </Details>
            )}
        </Container>
    );
};

export default UserItem;

// Styled components
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

const Meta = styled.div`
    color: #666;
    font-size: 0.95rem;
    margin-top: 4px;
`;

const Role = styled.span`
    font-weight: bold;
    color: #1976d2;
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
