import { useRef } from 'react';
import styled from 'styled-components';
import InputBox from './InputBox';
import ModalMemoList from './ModalMemoList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

const ModalBg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ModalBlock = styled.div`
  position: absolute;
  z-index: 2;
  border-radius: 0.5rem;
  padding: 0.5rem 0.5rem 1rem;
  background-color: white;
`;
const ModalContent = styled.div`
  padding: 0 0.5rem;
  margin: 0 auto;

  width: 100%;
  height: 100%;
`;

const ModalFooter = styled.div`
  height: 2rem;
  display: flex;
  justify-content: center;
  padding: 0 0.5rem;
  margin: 20px 0;
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
  cursor: pointer;
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

const Modal = ({
  modalVisible,
  monthStr,
  dayStr,
  myDate,
  prevDate,
  nextDate,
  selectedId,
  memoArr,
  onInsert,
  onCheck,
  onRemove,
  onPoint,
  onModalConfirm,
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
  if (!modalVisible) return null;
  return (
    <ModalBg onClick={onModalConfirm}>
      <ModalBlock onClick={(e) => e.stopPropagation()}>
        <ModalContent>
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
              memoArr={memoArr}
              onRemove={onRemove}
              onPoint={onPoint}
              onCheck={onCheck}
              selectedId={selectedId}
            />
          </>
        </ModalContent>
        <ModalFooter>
          <StyledButton onClick={onModalConfirm}>Confirm</StyledButton>
        </ModalFooter>
      </ModalBlock>
    </ModalBg>
  );
};

export default Modal;
