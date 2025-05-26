import React, {useEffect, useState} from "react";
import styled from "styled-components";
import DashboardHeader from "../components/Dashboard/DashboardHeader.tsx";
import RecipientSearchBar from "../components/RecipientSearch/RecipientSearchBar.tsx";
import RecipientList from "../components/RecipientSearch/RecipientList.tsx";
import AddRecipientModal from "../components/AddRecipientModal/AddRecipientModal.tsx";
import {searchRecipients} from "../api/recipientApi.ts";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`;


const AddRecipientButton = styled.button`
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

const PaginationControls = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 16px;
    gap: 8px;
`;

const RecipientManagementPage: React.FC = () => {
    const [showModal, setShowModal] = useState(false);
    const [recipients, setRecipients] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [page, setPage] = useState(0);
    const size = 10;

    const loadRecipients = async () => {
        const all = await searchRecipients();
        // const all = [];
        const filtered = all.filter((r: any) =>
            `${r.firstName} ${r.lastName} ${r.organization}`
                .toLowerCase()
                .includes(searchText.toLowerCase())
        );
        setRecipients(filtered.slice(page * size, page * size + size));
    };

    useEffect(() => {
        loadRecipients();
    }, [page, searchText]);

    return (
        <Wrapper>
            <DashboardHeader/>
            <AddRecipientButton onClick={() => setShowModal(true)}>
                Добавить получателя
            </AddRecipientButton>
            {showModal && <AddRecipientModal onClose={() => setShowModal(false)}/>}
            <RecipientSearchBar searchText={searchText} setSearchText={setSearchText}/>
            <RecipientList recipients={recipients}/>
            <PaginationControls>
                <button onClick={() => setPage((p) => Math.max(p - 1, 0))} disabled={page === 0}>
                    Назад
                </button>
                <span>Страница {page + 1}</span>
                <button onClick={() => setPage((p) => p + 1)} disabled={recipients.length < size}>
                    Вперед
                </button>
            </PaginationControls>
        </Wrapper>
    );
};

export default RecipientManagementPage;
