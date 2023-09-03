import styled from 'styled-components';
import Slider from './common/Slider';
import ToDoModal from './modal/ToDoModal';
import ToDoList from './ToDoList';

const MainBlock = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
`;

const Main = ({
  monthStr,
  dayStr,
  isAddModal,
  isEditModal,
  memoArr,
  onInsert,
  onRemove,
  onCheck,
  onPoint,
  toDoArr,
  onCreateToDoItem,
  onDeleteToDo,
  openAddModal,
  openEditModal,
  onUpdateToDoItem,
  selectedId,
  myDate,
  prevDate,
  nextDate,
}) => {
  return (
    <MainBlock>
      <Slider openAddModal={openAddModal} />
      <ToDoList
        monthStr={monthStr}
        dayStr={dayStr}
        toDoArr={toDoArr}
        onDeleteToDo={onDeleteToDo}
        openEditModal={openEditModal}
      />
      <ToDoModal
        prevDate={prevDate}
        nextDate={nextDate}
        selectedId={selectedId}
        myDate={myDate}
        monthStr={monthStr}
        dayStr={dayStr}
        memoArr={memoArr}
        modalVisible={isAddModal}
        onModalConfirm={onCreateToDoItem}
        onInsert={onInsert}
        onRemove={onRemove}
        onPoint={onPoint}
        onCheck={onCheck}
      />
      <ToDoModal
        prevDate={prevDate}
        nextDate={nextDate}
        selectedId={selectedId}
        myDate={myDate}
        monthStr={monthStr}
        dayStr={dayStr}
        memoArr={memoArr}
        modalVisible={isEditModal}
        onModalConfirm={onUpdateToDoItem}
        onInsert={onInsert}
        onRemove={onRemove}
        onPoint={onPoint}
        onCheck={onCheck}
      />
    </MainBlock>
  );
};

export default Main;
