import { useRef } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import Modal from '../common/Modal';
import InputBox from './InputBox';
import ModalMemoList from './ModalMemoList';

const EditModalBlock = styled.div`
  width: 500px;
  height: 500px;
`;

const EditModalHeaderBlock = styled.div`
  height: 15%;
  padding: 0;
  text-align: center;
`;

const Today = styled.h1`
  display: inline-block;
  color: #6c7a89;
  font-size: 30px;
  margin-top: 25px;
`;

const ModalBody = styled.div``;
const EditModal = ({
  isEditModal,
  monthStr,
  dayStr,
  onUpdateToDoItem,
  selectedId,
  mmItems,
  mdItems,
  onInsert,
  onCheck,
  onRemove,
  onPoint,
}) => {
  const memoDate = useRef('');
  useEffect(() => {
    mmItems.map((mmItem) => {
      if (mmItem.id === selectedId) {
        memoDate.current = new Date(mmItem.cal);
      }
      return mmItem;
    });
  }, [mmItems, selectedId]);
  return (
    <Modal modalVisible={isEditModal} onModalConfirm={onUpdateToDoItem}>
      <EditModalBlock>
        <EditModalHeaderBlock>
          <Today>
            {/* {`${dayStr[memoDate.current.getDay()]}, ${
              monthStr[memoDate.current.getMonth()]
            } 
            ${memoDate.current.getDate()}th`} */}
          </Today>
        </EditModalHeaderBlock>
        <ModalBody>
          <InputBox onInsert={onInsert} />
          <ModalMemoList
            mdItems={mdItems}
            onRemove={onRemove}
            onPoint={onPoint}
            onCheck={onCheck}
            selectedId={selectedId}
          />
        </ModalBody>
      </EditModalBlock>
      ;
    </Modal>
  );
};

export default EditModal;
