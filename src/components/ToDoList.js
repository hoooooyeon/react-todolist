import styled, { css } from 'styled-components';
import MemoList from './memo/MemoList';
import React, { useRef, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { faFilePen } from '@fortawesome/free-solid-svg-icons';

const ToDoListBlock = styled.div`
  margin: 0;
  width: calc(100% - 250px);
  position: relative;
  top: 69px;
  left: 250px;
  transition: all 0.3s;
  justify-content: center;
  padding: 50px 0px 20px 0px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 284px);
  gap: 10px;
  grid-auto-flow: dense;
`;

const ToDoItem = styled.div`
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
  visibility: hidden;
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

const ToDoList = ({ mmItems, removeMemoItem, openEditModal }) => {
  const ref = useRef();
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setHeight(0);
    setHeight(ref.current && ref.current.offsetHeight);
  }, [ref, height]);

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

  const menuRef = useRef();
  const onMouseOver = (e) => {
    menuRef.current.style.visibility = 'visible';
  };
  const onMouseOut = (e) => {
    menuRef.current.style.visibility = 'hidden';
  };

  return (
    <ToDoListBlock>
      {mmItems.map((mmItem) => {
        let memoDate = new Date(mmItem.cal);
        const { id } = mmItem;
        return (
          <ToDoItem
            key={mmItem.id}
            ref={ref}
            onMouseOut={onMouseOut}
            onMouseOver={onMouseOver}
            height={height}
          >
            <ItemHeader>{`${dayStr[memoDate.getDay()]}, ${
              monthStr[memoDate.getMonth()]
            } 
    ${memoDate.getDate()}th`}</ItemHeader>
            <MemoList mmItem={mmItem} />
            <Menu ref={menuRef}>
              <IconDiv onClick={() => openEditModal(id)}>
                <StyledFontAwesomeIcon icon={faFilePen} />
              </IconDiv>
              <IconDiv onClick={() => removeMemoItem(id)}>
                <StyledFontAwesomeIcon icon={faTrashCan} />
              </IconDiv>
            </Menu>
          </ToDoItem>
        );
      })}
    </ToDoListBlock>
  );
};

export default ToDoList;
