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
  onPoint,
  mmItems,
  insertMemoItem,
  removeMemoItem,
  modalClose,
  modalOpen,
}) => {
  return (
    <Main>
      <Slider
        mdItems={mdItems}
        onInsert={onInsert}
        onRemove={onRemove}
        onPoint={onPoint}
        insertMemoItem={insertMemoItem}
        modalClose={modalClose}
        modalOpen={modalOpen}
      />
      <MemoBlock>
        {mmItems.map((mmItem) => (
          <MemoList
            mmItem={mmItem}
            key={mmItem.id}
            removeMemoItem={removeMemoItem}
          />
        ))}
      </MemoBlock>
    </Main>
  );
};

export default Memo;
