import styled from 'styled-components';
import React, { useState, useRef, useCallback } from 'react';
import Button from '../common/Button';
import ModalHeader from './ModalHeader';
import ModalInsert from './ModalInsert';
import ModalItems from './ModalItems';

const ModalBlock = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 997;
`;

const ModalBg = styled.div`
  z-index: 998;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
`;
const ModalForm = styled.div`
  width: 500px;
  height: 500px;
  position: absolute;
  z-index: 999;
  background-color: white;
  border-radius: 10px;
  border: none;
`;

const AddModal = ({ modal, items, onInsert, onRemove, onPoint }) => {
  if (!modal) return null;
  return (
    <ModalBlock>
      <ModalBg />
      <ModalForm>
        <ModalHeader />
        <div>
          <ModalInsert onInsert={onInsert} />
          <ModalItems items={items} onRemove={onRemove} onPoint={onPoint} />
          <Button item="true">CONFIRM</Button>
          <Button item="true">CANCEL</Button>
        </div>
      </ModalForm>
    </ModalBlock>
  );
};

export default AddModal;
