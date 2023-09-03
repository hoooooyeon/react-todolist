import styled, { css } from 'styled-components';
import MemoList from './memo/MemoList';
import React, { useRef, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { faFilePen } from '@fortawesome/free-solid-svg-icons';

const ToDoItemBlock = styled.div`
  border: 2px solid #a3c6c4;
  background-color: white;
  word-break: break-all;
  padding: 10px;
  border-radius: 10px;
  &:hover {
    box-shadow: 1px 1px 5px gray;
  }

  ${(props) =>
    props.height &&
    css`
      grid-row-end: ${`span ${Math.ceil(props.height / 10)}`};
    `};
`;

const ItemHeader = styled.h3`
  text-align: center;
  color: #354649;
  margin: 10px 0 0px 0;
`;

const Menu = styled.div`
  width: 250px;
  height: 50px;
`;

const IconDiv = styled.div`
  position: relative;
  top: 20px;
  width: 35px;
  height: 35px;
  text-align: center;
  display: inline-block;
  cursor: pointer;
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

const ToDoItem = ({
  monthStr,
  dayStr,
  memoDate,
  toDoMemo,
  onDeleteToDo,
  openEditModal,
}) => {
  const itemRef = useRef();
  const [height, setHeight] = useState(0);

  // useEffect(() => {
  //   console.log(toDoMemo);
  //   if (itemRef.current) {
  //     setHeight(0);
  //     setHeight(itemRef.current.offsetHeight);
  //   }
  // }, [itemRef.current]);

  const [isHovered, setIsHovered] = useState();
  const onMouseOver = (id) => {
    setIsHovered(id);
  };
  const onMouseOut = () => {
    setIsHovered(null);
  };

  return (
    <ToDoItemBlock
      ref={itemRef}
      onMouseOut={onMouseOut}
      onMouseOver={() => onMouseOver(toDoMemo.id)}
      height={height}
    >
      <ItemHeader>{`${dayStr[memoDate.getDay()]}, ${
        monthStr[memoDate.getMonth()]
      } 
    ${memoDate.getDate()}th`}</ItemHeader>
      <MemoList toDoMemo={toDoMemo} />

      <Menu>
        {isHovered === toDoMemo.id && (
          <>
            <IconDiv onClick={() => openEditModal(toDoMemo.id)}>
              <StyledFontAwesomeIcon icon={faFilePen} />
            </IconDiv>
            <IconDiv onClick={() => onDeleteToDo(toDoMemo.id)}>
              <StyledFontAwesomeIcon icon={faTrashCan} />
            </IconDiv>
          </>
        )}
      </Menu>
    </ToDoItemBlock>
  );
};

export default ToDoItem;
