import styled from 'styled-components';
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
  z-index: 997;
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

const StyledButton = styled.button`
  background-color: #e0e7e9;
  border: none;
  color: #6c7a89;
  font-weight: bold;
  border-radius: 5px;
  width: 120px;
  height: 40px;
  font-size: 20px;
  position: relative;
  left: 25%;
  transform: translate(0, 150%);
  & + & {
    margin-left: 1rem;
  }
`;

const AddModal = ({
  mdItems,
  mmItems,
  onInsert,
  onRemove,
  onPoint,
  onCheck,
  modalClose,
  insertMemoItem,
  selectedId,
  editModalClose,
  today,
  prevDate,
  nextDate,
}) => {
  return (
    <ModalBlock>
      <ModalBg onClick={modalClose} />
      <ModalForm>
        <ModalHeader
          prevDate={prevDate}
          nextDate={nextDate}
          today={today}
          selectedId={selectedId}
          mmItems={mmItems}
        />
        <div>
          <ModalInsert onInsert={onInsert} />
          <ModalItems
            mdItems={mdItems}
            onRemove={onRemove}
            onPoint={onPoint}
            onCheck={onCheck}
            selectedId={selectedId}
          />
          {selectedId ? (
            <StyledButton onClick={editModalClose}>EDIT</StyledButton>
          ) : (
            <StyledButton onClick={() => insertMemoItem(mdItems)}>
              ADD
            </StyledButton>
          )}
          <StyledButton onClick={modalClose}>CANCEL</StyledButton>
        </div>
      </ModalForm>
    </ModalBlock>
  );
};

export default AddModal;
