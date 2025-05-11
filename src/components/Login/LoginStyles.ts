import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f3f4f6;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    background-color: white;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 300px;
`;

export const Input = styled.input`
    margin-bottom: 1rem;
    padding: 0.75rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
`;

export const Button = styled.button`
    background-color: #3f51b5;
    color: white;
    padding: 0.75rem;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;

    &:hover {
        background-color: #303f9f;
    }
`;

export const Error = styled.p`
    color: red;
    font-size: 0.9rem;
    margin-bottom: 1rem;
`;
