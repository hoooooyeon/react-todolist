import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import React, { useRef, useState } from 'react';
import Button from '../common/Button';
import List from './List';

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
const ModalHeader = styled.div`
  height: 15%;
  padding: 0;
  text-align: center;
  display: flex;
  justify-content: space-between;
`;
const IconDiv = styled.div`
  width: 35px;
  height: 35px;
  display: inline-block;
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
const InputDiv = styled.div`
  position: relative;
  top: 30px;
  text-align: center;
`;

const InputText = styled.div`
  width: 300px;
  height: 30px;
  border: none;
  border-bottom: 2px solid #a3c6c4;
  font-size: 20px;
  outline: none;
  margin-right: 10px;
  padding-left: 5px;
`;

const ListDiv = styled.div`
  position: relative;
  top: 60px;
  left: 27px;
  height: 230px;
  overflow: auto;
  width: 450px;
`;

const MemoModal = ({ modal, onDeleteModal }) => {
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

  // 현재 날짜 구하기
  const monthStr = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const dayStr = [
    'SUNDAY',
    'MONDAY',
    'TUESDAY',
    'WEDNESDAY',
    'THURSDAY',
    'FRIDAY',
    'SATURDAY',
  ];
  const today = new Date();
  const myToday = today;
  const [myDate, setMyDate] = useState({
    day: myToday.getDay(),
    month: myToday.getMonth(),
    date: myToday.getDate(),
  });

  const prevDate = () => {
    setMyDate({
      ...myDate,
      date: myToday.getDate() - 1,
    });
  };
  const nextDate = () => {
    setMyDate({
      ...myDate,
      date: myToday.getDate() + 1,
    });
  };

  if (!modal) return null;
  return (
    <ModalBlock>
      <ModalBg />
      <AddModal>
        <ModalHeader onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
          <IconDiv onClick={prevDate} ref={arrowLeft}>
            <StyledFontAwesomeIcon icon={faCaretLeft} />
          </IconDiv>
          <Today>
            {`${dayStr[myDate.day]}, ${monthStr[myDate.month]} 
            ${myDate.date}th`}
          </Today>
          <IconDiv onClick={nextDate} ref={arrowRight}>
            <StyledFontAwesomeIcon icon={faCaretRight} />
          </IconDiv>
        </ModalHeader>
        <div>
          <InputDiv>
            <InputText />
            <Button>ADD</Button>
          </InputDiv>
          <ListDiv>
            <List />
          </ListDiv>
          <Button item="true">CONFIRM</Button>
          <Button item="true">CANCEL</Button>
        </div>
      </AddModal>
    </ModalBlock>
  );
};

export default MemoModal;
