import React, { useState } from 'react';
import styled from 'styled-components';
import UserRow from './UserRow';
import Modal from './Modal';

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  cursor: pointer;
`;

const UserTable = ({ users }) => {
  const [sortConfig, setSortConfig] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleSort = (key) => {
    let direction = 'ascending';
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'ascending'
    ) {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const sortedUsers = React.useMemo(() => {
    if (sortConfig !== null) {
      return [...users].sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return users;
  }, [users, sortConfig]);

  return (
    <>
      <Table>
        <thead>
          <tr>
            <Th onClick={() => handleSort('name')}>ФИО</Th>
            <Th onClick={() => handleSort('age')}>Возраст</Th>
            <Th onClick={() => handleSort('gender')}>Пол</Th>
            <Th>Номер телефона</Th>
            <Th onClick={() => handleSort('address')}>Адрес</Th>
          </tr>
        </thead>
        <tbody>
          {sortedUsers.map((user) => (
            <UserRow
              key={user.id}
              user={user}
              onClick={() => setSelectedUser(user)}
            />
          ))}
        </tbody>
      </Table>
      {selectedUser && (
        <Modal user={selectedUser} onClose={() => setSelectedUser(null)} />
      )}
    </>
  );
};

export default UserTable;
