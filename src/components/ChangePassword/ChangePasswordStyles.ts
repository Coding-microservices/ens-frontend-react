import styled from "styled-components";

export const Form = styled.form`
  max-width: 400px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Input = styled.input`
  padding: 8px;
`;

export const Button = styled.button`
  padding: 8px;
  cursor: pointer;
`;

export const Message = styled.p<{ success?: boolean }>`
  color: ${(props) => (props.success ? "green" : "red")};
`;
