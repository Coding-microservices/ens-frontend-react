import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`;

export const Header = styled.header`
    background-color: #3f51b5;
    color: white;
    padding: 1rem 2rem;
    font-size: 1.25rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Content = styled.main`
    flex-grow: 1;
    padding: 2rem;
    background-color: #f9f9f9;
`;

export const HeaderWrapper = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 16px;
    background-color: #f1f1f1;
    align-items: center;
`;

export const Title = styled.h1`
    font-size: 1.5rem;
`;