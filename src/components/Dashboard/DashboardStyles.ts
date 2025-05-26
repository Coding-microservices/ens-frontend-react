import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`;

export const Header = styled.header`
    background-color: #3f51b5;
    color: white;
    //padding: 1rem 2rem;
    font-size: 1.25rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
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

export const ButtonGroup = styled.div`
    display: flex;
    align-items: center;
    //gap: 12px;
`;

export const Title = styled.span`
    font-size: 30px;
    font-weight: bold;
    padding-left: 20px;
`;

export const NavButton = styled.button`
    background: transparent;
    //border: 1px solid white;
    border: none;
    color: white;
    padding: 20px 60px;
    cursor: pointer;
    //border-radius: 0px;
    transition: 0.2s ease;
    font-size: 20px;

    &:hover {
        background: #FFFFFF20;
        //color: #282c34;
    }
`;



