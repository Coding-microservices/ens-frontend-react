import styled from "styled-components";

export const UserButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 1rem;
`;

export const AddUserButton = styled.button`
    background-color: #4caf50;
    color: white;
    padding: 0.6rem 1.2rem;
    font-size: 1rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    width: 60%;
    margin: 0 auto;

    &:hover {
        background-color: #43a047;
    }
`;

export const Overlay = styled.div`
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
`;

export const Modal = styled.div`
    background: white;
    padding: 32px;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    min-width: 360px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
`;

export const Input = styled.input`
    padding: 10px;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 6px;
`;

export const Select = styled.select`
    padding: 10px;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 6px;
`;

export const CheckboxLabel = styled.label`
    display: flex;
    align-items: center;
    gap: 8px;
`;

export const Button = styled.button`
    padding: 10px 16px;
    font-size: 1rem;
    background-color: #1976d2;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
        background-color: #1565c0;
    }
`;

export const ButtonRow = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 10px;
`;
