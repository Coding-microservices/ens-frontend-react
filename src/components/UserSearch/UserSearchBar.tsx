import React, {useEffect, useRef} from "react";
import styled from "styled-components";

interface Props {
    filters: any;
    setFilters: (updater: (prev: any) => any) => void;
    onSearch: () => void;
}

const UserSearchBar: React.FC<Props> = ({filters, setFilters, onSearch}) => {
    const debounceRef = useRef<number | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, checked, type, value} = e.target;

        setFilters(prev => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));

        // Если меняется текст, запустим debounce
        if (name === "searchText") {
            if (debounceRef.current) {
                clearTimeout(debounceRef.current);
            }
            debounceRef.current = setTimeout(() => {
                onSearch();
            }, 500); // задержка 500мс
        }
    };

    // Для фильтров-чекбоксов, запускаем поиск сразу
    useEffect(() => {
        onSearch();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filters.admins, filters.users, filters.blocked, filters.deleted]);

    return (
        <SearchContainer>
            <SearchInput
                type="text"
                name="searchText"
                placeholder="Поиск..."
                value={filters.searchText}
                onChange={handleChange}
            />
            <CheckboxGroup>
                <label>
                    <input type="checkbox" name="admins" checked={filters.admins} onChange={handleChange}/>
                    Админы
                </label>
                <label>
                    <input type="checkbox" name="users" checked={filters.users} onChange={handleChange}/>
                    Пользователи
                </label>
                <label>
                    <input type="checkbox" name="blocked" checked={filters.blocked} onChange={handleChange}/>
                    Заблокированные
                </label>
                <label>
                    <input type="checkbox" name="deleted" checked={filters.deleted} onChange={handleChange}/>
                    Удаленные
                </label>
            </CheckboxGroup>
        </SearchContainer>
    );
};

export default UserSearchBar;

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

const CheckboxGroup = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;

    label {
        display: flex;
        align-items: center;
        gap: 4px;
        font-size: 0.95rem;
        user-select: none;
    }
`;
