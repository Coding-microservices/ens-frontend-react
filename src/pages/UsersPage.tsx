import React, {useEffect, useState} from "react";
import {Wrapper} from "../components/Dashboard/DashboardStyles.ts";
import DashboardHeader from "../components/Dashboard/DashboardHeader.tsx";
import AddUserModal from "../components/AddUserModal/AddUserModal.tsx";
import {AddUserButton} from "../components/AddUserModal/AddUserStyles.ts";
import UserList from "../components/UserSearch/UserList.tsx";
import UserSearchBar from "../components/UserSearch/UserSearchBar.tsx";
import styled from "styled-components";
import {searchUsers} from "../api/usersApi.ts";

const PaginationControls = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
  gap: 8px;
`;

const ChangePasswordPage: React.FC = () => {
    const [showModal, setShowModal] = useState(false);

    const [users, setUsers] = useState([]);
    const [filters, setFilters] = useState({
        searchText: "",
        admins: true,
        users: true,
        blocked: true,
        deleted: true,
    });
    const [page, setPage] = useState(0);
    const size = 10;

    const handleSearch = async (resetPage = false) => {
        const currentPage = resetPage ? 0 : page;
        const data = await searchUsers(filters, currentPage, size);
        setUsers(data);
        if (resetPage) setPage(0);
    };

    useEffect(() => {
        handleSearch();
    }, [page]);

    return (
        <Wrapper>
            <DashboardHeader/>
            <AddUserButton onClick={() => setShowModal(true)}>
                Добавить пользователя
            </AddUserButton>
            {showModal && <AddUserModal onClose={() => setShowModal(false)}/>}
            <UserSearchBar filters={filters} setFilters={setFilters} onSearch={handleSearch} />
            <UserList users={users} />
            <PaginationControls>
                <button onClick={() => setPage((p) => Math.max(p - 1, 0))} disabled={page === 0}>
                    Назад
                </button>
                <span>Страница {page + 1}</span>
                <button onClick={() => setPage((p) => p + 1)} disabled={users.length < size}>
                    Вперед
                </button>
            </PaginationControls>
        </Wrapper>
    );
};

export default ChangePasswordPage;
