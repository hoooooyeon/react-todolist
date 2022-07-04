import styled from 'styled-components';
import React, { useState, useRef, useCallback } from 'react';
import Button from '../../common/Button';
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
const AddModal = styled.div`
  width: 500px;
  height: 500px;
  position: absolute;
  z-index: 999;
  background-color: white;
  border-radius: 10px;
  border: none;
`;

const MemoModal = ({ modal }) => {
  const [items, setItems] = useState([]);

  const nextId = useRef(1);
  const onInsert = useCallback(
    (text) => {
      const item = {
        id: nextId.current,
        text,
        point: false,
      };
      setItems(items.concat(item));
      nextId.current += 1;
    },
    [items],
  );

  const onRemove = useCallback(
    (id) => {
      setItems(items.filter((item) => item.id !== id));
    },
    [items],
  );

  const onPoint = useCallback(
    (id) => {
      setItems(
        items.map((item) =>
          item.id === id ? { ...item, point: !item.point } : item,
        ),
      );
    },
    [items],
  );

  if (!modal) return null;
  return (
    <ModalBlock>
      <ModalBg />
      <AddModal>
        <ModalHeader />
        <div>
          <ModalInsert onInsert={onInsert} />
          <ModalItems items={items} onRemove={onRemove} onPoint={onPoint} />
          <Button item="true">CONFIRM</Button>
          <Button item="true">CANCEL</Button>
        </div>
      </AddModal>
    </ModalBlock>
  );
};

export default MemoModal;
