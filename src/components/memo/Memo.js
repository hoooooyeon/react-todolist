import styled from 'styled-components';
import Slider from '../common/Slider';
import MemoList from './MemoList';
const Main = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
`;

const MemoBlock = styled.div`
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

const Memo = ({
  mdItems,
  onInsert,
  onRemove,
  onCheck,
  onPoint,
  mmItems,
  insertMemoItem,
  removeMemoItem,
  modalClose,
  modalOpen,
  editModalOpen,
  editModalClose,
  selectedId,
  myDate,
  prevDate,
  nextDate,
}) => {
  return (
    <Main>
      <Slider
        mdItems={mdItems}
        mmItems={mmItems}
        onInsert={onInsert}
        onRemove={onRemove}
        onPoint={onPoint}
        onCheck={onCheck}
        insertMemoItem={insertMemoItem}
        modalClose={modalClose}
        modalOpen={modalOpen}
        selectedId={selectedId}
        editModalClose={editModalClose}
        myDate={myDate}
        prevDate={prevDate}
        nextDate={nextDate}
      />
      <MemoBlock>
        {mmItems.map((mmItem) => (
          <MemoList
            mmItem={mmItem}
            key={mmItem.id}
            removeMemoItem={removeMemoItem}
            editModalOpen={editModalOpen}
          />
        ))}
      </MemoBlock>
    </Main>
  );
};

export default Memo;
