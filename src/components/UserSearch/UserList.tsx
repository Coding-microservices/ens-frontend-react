import React from "react";
import styled from "styled-components";
import UserItem from "./UserItem";

interface Props {
    users: any[];
}

const UserList: React.FC<Props> = ({users}) => {
    return (
        <ListContainer>
            {users.map((user) => (
                <UserItem key={user.accountId} user={user}/>
            ))}
        </ListContainer>
    );
};

export default UserList;

const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 60%;
    margin: 0 auto;
    //margin-top: 16px;
`;
