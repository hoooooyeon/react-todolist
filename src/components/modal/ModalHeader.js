import styled from 'styled-components';
import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

const ModalHeaderBlock = styled.div`
  height: 15%;
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

const ModalHeader = ({ myDate, prevDate, nextDate, selectedId }) => {
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
  );
};

export default ModalHeader;
