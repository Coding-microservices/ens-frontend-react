import React from "react";
import styled from "styled-components";
import RecipientItem from "./RecipientItem";

const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 60%;
    margin: 0 auto;
    //margin-top: 16px;
`;
interface Props {
    recipients: any[];
}

const RecipientList: React.FC<Props> = ({ recipients }) => {
    return (
        <ListContainer>
            {recipients.map((r) => (
                <RecipientItem key={r.id} recipient={r} />
            ))}
        </ListContainer>
    );
};

export default RecipientList;
