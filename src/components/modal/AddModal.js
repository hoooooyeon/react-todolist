import { useRef } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import Modal from '../common/Modal';
import InputBox from './InputBox';
import ModalMemoList from './ModalMemoList';

const AddModalBlock = styled.div`
  width: 100%;
  height: 100%;
`;

const ModalHeaderBlock = styled.div`
  height: 75px;
  padding: 0;
  text-align: center;
  display: flex;
  justify-content: space-between;
`;

const IconDiv = styled.div`
  width: 35px;
  height: 35px;
  margin-top: 30px;
  visibility: hidden;
  &:hover {
    border-radius: 100px;
    background-color: #e0e7e9;
    cursor: pointer;
  }
`;
const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 35px;
  color: #6c7a89;
  margin-left: 3px;
`;

const Today = styled.h1`
  display: inline-block;
  color: #6c7a89;
  font-size: 30px;
  margin-top: 25px;
`;

const AddModal = ({
  myDate,
  isAddModal,
  onCreateToDoItem,
  monthStr,
  dayStr,
  prevDate,
  nextDate,
  selectedId,
  mdItems,
  onInsert,
  onCheck,
  onRemove,
  onPoint,
}) => {
  let memoDate = new Date(myDate);

  // 모달 헤더의 날짜 화살표 visibile
  const arrowLeft = useRef();
  const arrowRight = useRef();
  const onMouseOver = () => {
    arrowLeft.current.style.visibility = 'visible';
    arrowRight.current.style.visibility = 'visible';
  };
  const onMouseOut = () => {
    arrowLeft.current.style.visibility = 'hidden';
    arrowRight.current.style.visibility = 'hidden';
  };
  return (
    <Modal modalVisible={isAddModal} onModalConfirm={onCreateToDoItem}>
      <AddModalBlock>
        <ModalHeaderBlock onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
          <IconDiv ref={arrowLeft} onClick={() => prevDate(selectedId)}>
            <StyledFontAwesomeIcon icon={faCaretLeft} />
          </IconDiv>
          <Today>
            {`${dayStr[memoDate.getDay()]}, ${monthStr[memoDate.getMonth()]} 
${memoDate.getDate()}th`}
          </Today>
          <IconDiv ref={arrowRight} onClick={() => nextDate(selectedId)}>
            <StyledFontAwesomeIcon icon={faCaretRight} />
          </IconDiv>
        </ModalHeaderBlock>
        <>
          <InputBox onInsert={onInsert} />
          <ModalMemoList
            mdItems={mdItems}
            onRemove={onRemove}
            onPoint={onPoint}
            onCheck={onCheck}
            selectedId={selectedId}
          />
        </>
      </AddModalBlock>
    </Modal>
  );
};

export default AddModal;
