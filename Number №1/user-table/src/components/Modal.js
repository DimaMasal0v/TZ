import React from 'react';
import styled from 'styled-components';

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 4px;
  width: 80%;
  max-width: 500px;
`;

const CloseButton = styled.button`
  background: #f44336;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  float: right;
`;

const Modal = ({ user, onClose }) => (
  <ModalBackdrop onClick={onClose}>
    <ModalContent onClick={(e) => e.stopPropagation()}>
      <CloseButton onClick={onClose}>Закрыть</CloseButton>
      <h2>{`${user.firstName} ${user.lastName}`}</h2>
      <p>Возраст: {user.age}</p>
      <p>Пол: {user.gender}</p>
      <p>Телефон: {user.phone}</p>
      <p>Адрес: {`${user.address.city}, ${user.address.street}`}</p>
      <p>Рост: {user.height}</p>
      <p>Вес: {user.weight}</p>
    </ModalContent>
  </ModalBackdrop>
);

export default Modal;
