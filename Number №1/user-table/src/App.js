import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import UserTable from './components/UserTable';
import SearchInput from './components/SearchInput';

const AppContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const App = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data.users))
      .catch((error) => console.error('Error fetching users:', error));
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredUsers = users.filter(user =>
    `${user.firstName} ${user.lastName} ${user.age} ${user.gender} ${user.phone} ${user.address.city} ${user.address.street}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <AppContainer>
      <SearchInput onSearch={handleSearch} />
      <UserTable users={filteredUsers} />
    </AppContainer>
  );
};

export default App;
