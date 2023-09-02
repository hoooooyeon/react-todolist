import styled from 'styled-components';
import Slider from './common/Slider';
import AddModal from './modal/AddModal';
import EditModal from './modal/EditModal';
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
  mdItems,
  onInsert,
  onRemove,
  onCheck,
  onPoint,
  mmItems,
  onCreateToDoItem,
  removeMemoItem,
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
        mmItems={mmItems}
        removeMemoItem={removeMemoItem}
        openEditModal={openEditModal}
      />
      <AddModal
        prevDate={prevDate}
        nextDate={nextDate}
        selectedId={selectedId}
        myDate={myDate}
        monthStr={monthStr}
        dayStr={dayStr}
        mdItems={mdItems}
        isAddModal={isAddModal}
        onCreateToDoItem={onCreateToDoItem}
      />
      <EditModal
        selectedId={selectedId}
        mmItems={mmItems}
        mdItems={mdItems}
        monthStr={monthStr}
        dayStr={dayStr}
        isEditModal={isEditModal}
        onUpdateToDoItem={onUpdateToDoItem}
      />
      {/* {modalOpen && (
        <ToDoModal
          modalClose={modalClose}
          mdItems={mdItems}
          mmItems={mmItems}

          onInsert={onInsert}
          onRemove={onRemove}
          onPoint={onPoint}
          onCheck={onCheck}

          insertMemoItem={insertMemoItem}

          selectedId={selectedId}

          editModalClose={editModalClose}

          myDate={myDate}

          prevDate={prevDate}
          nextDate={nextDate}
        />
      )} */}
    </MainBlock>
  );
};

export default Main;
