import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamation } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const ListBlock = styled.div`
  width: 400px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 0 10px 25px;
`;
const TextForm = styled.div`
  width: 300px;
  height: 32px;
  font-size: 20px;
  border: 2px solid #a3c6c4;
  border-radius: 5px;
  padding: 1px 8px 0 8px;
`;

const IconDiv = styled.div`
  width: 35px;
  height: 35px;
  display: inline-block;
  margin: 5px 0 0 6px;
  &:hover {
    border-radius: 100px;
    background-color: #e0e7e9;
    cursor: pointer;
  }
  & + & {
    margin-left: 0.5rem;
  }
`;
const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: #354649;
  font-size: 25px;
  margin: 4px 0 0 5px;
  text-align: center;
`;

const List = ({ input }) => {
  return (
    <ListBlock>
      <TextForm>{input}</TextForm>
      <div>
        <IconDiv>
          <StyledFontAwesomeIcon icon={faExclamation} />
        </IconDiv>
        <IconDiv>
          <StyledFontAwesomeIcon icon={faTrashCan} />
        </IconDiv>
      </div>
    </ListBlock>
  );
};

export default List;
