import React, { useRef, useEffect } from "react";
import styled from "styled-components";

const SearchContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    width: 60%;
    margin: 0 auto;
    gap: 16px;
    //margin-bottom: 20px;
`;

const SearchInput = styled.input`
    padding: 10px 12px;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 1rem;

    &:focus {
        outline: none;
        border-color: #1976d2;
        box-shadow: 0 0 0 2px rgba(25, 118, 210, 0.2);
    }
`;

interface Props {
    searchText: string;
    setSearchText: (text: string) => void;
}

const RecipientSearchBar: React.FC<Props> = ({ searchText, setSearchText }) => {
    const debounceRef = useRef<number | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        if (debounceRef.current) clearTimeout(debounceRef.current);
        debounceRef.current = window.setTimeout(() => {
            setSearchText(value);
        }, 400);
    };

    useEffect(() => () => {
        if (debounceRef.current) clearTimeout(debounceRef.current);
    }, []);

    return (
        <SearchContainer>
            <SearchInput
                type="text"
                placeholder="Поиск по имени, фамилии, организации..."
                defaultValue={searchText}
                onChange={handleChange}
            />
        </SearchContainer>
    );
};

export default RecipientSearchBar;
