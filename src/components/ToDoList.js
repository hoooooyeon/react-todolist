import { useRef } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import ToDoItem from './ToDoItem';

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

const ToDoList = ({
  toDoArr,
  onDeleteToDo,
  openEditModal,
  monthStr,
  dayStr,
}) => {
  const listRef = useRef();
  useEffect(() => {
    if (listRef.current && toDoArr.length > 0) {
      console.log(listRef.current.offsetHeight);
      toDoArr.forEach((item) => {
        console.log(item.getBoundingClientRect());
      });
    }
  }, [listRef, toDoArr]);
  return (
    <ToDoListBlock ref={listRef}>
      {toDoArr.map((toDoMemo) => {
        let memoDate = new Date(toDoMemo.cal);
        const { id } = toDoMemo;
        return (
          <ToDoItem
            key={id}
            monthStr={monthStr}
            dayStr={dayStr}
            memoDate={memoDate}
            toDoMemo={toDoMemo}
            onDeleteToDo={onDeleteToDo}
            openEditModal={openEditModal}
          />
        );
      })}
    </ToDoListBlock>
  );
};

export default ToDoList;
