import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const SearchInput = ({ onSearch }) => {
  const handleChange = (e) => {
    onSearch(e.target.value);
  };

  return <Input type="text" placeholder="Поиск..." onChange={handleChange} />;
};

export default SearchInput;
