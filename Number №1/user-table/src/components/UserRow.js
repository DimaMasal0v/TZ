import React from 'react';
import styled from 'styled-components';

const Tr = styled.tr`
  &:hover {
    background-color: #f1f1f1;
    cursor: pointer;
  }
`;

const Td = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

const UserRow = ({ user, onClick }) => (
  <Tr onClick={onClick}>
    <Td>{`${user.firstName} ${user.lastName}`}</Td>
    <Td>{user.age}</Td>
    <Td>{user.gender}</Td>
    <Td>{user.phone}</Td>
    <Td>{`${user.address.city}, ${user.address.street}`}</Td>
  </Tr>
);

export default UserRow;
