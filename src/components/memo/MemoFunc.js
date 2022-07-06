import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { faFilePen } from '@fortawesome/free-solid-svg-icons';

const MemoFuncBlock = styled.div`
  width: 250px;
  height: 50px;
  visibility: hidden;
`;

const IconDiv = styled.div`
  position: relative;
  top: 20px;
  width: 35px;
  height: 35px;
  text-align: center;
  display: inline-block;
  &:hover {
    border-radius: 100px;
    background-color: #e0e7e9;
    cursor: pointer;
  }
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 25px;
  margin: 4px 0 0 1px;
  color: #354649;
`;

const MemoFunc = ({ func, mmItem, removeMemoItem }) => {
  return (
    <MemoFuncBlock ref={func}>
      <IconDiv>
        <StyledFontAwesomeIcon icon={faFilePen} />
      </IconDiv>
      <IconDiv onClick={() => removeMemoItem(mmItem.id)}>
        <StyledFontAwesomeIcon icon={faTrashCan} />
      </IconDiv>
    </MemoFuncBlock>
  );
};

export default MemoFunc;
