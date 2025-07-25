import styled from "styled-components";

export const MenuContainer = styled.div`
    position: relative;
    display: inline-block;
`;

export const MenuButton = styled.button`
    background: transparent;
    //border: 1px solid white;
    border: none;
    color: white;
    padding: 20px 60px;
    cursor: pointer;
    //border-radius: 4px;
    transition: 0.2s ease;
    font-size: 20px;

    &:hover {
        background: #FFFFFF20;
        //color: #282c34;
    }
`;

export const Dropdown = styled.div`
    position: absolute;
    right: 0;
    top: 100%;
    background: white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    min-width: 180px;
    border-radius: 8px;
    z-index: 999;
    color: black;
`;

export const DropdownItem = styled.div`
    padding: 10px 36px;
    cursor: pointer;

    &:hover {
        background-color: #f5f5f5;
    }
`;
