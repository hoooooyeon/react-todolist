import styled from 'styled-components';
import ModalItem from './ModalItem';

const ItemItemsBlock = styled.div`
  position: relative;
  top: 60px;
  left: 27px;
  height: 230px;
  overflow: auto;
  width: 450px;
  &::-webkit-scrollbar {
    width: 12px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #a3c6c4;
  }
  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: #e0e7e9;
  }
`;

const ModalItems = ({ mdItems, onPoint, onCheck, onRemove, selectedId }) => {
  return (
    <ItemItemsBlock>
      {mdItems.map((mdItem) => (
        <ModalItem
          mdItem={mdItem}
          key={mdItem.id}
          onRemove={onRemove}
          onPoint={onPoint}
          onCheck={onCheck}
          selectedId={selectedId}
        />
      ))}
    </ItemItemsBlock>
  );
};
export default ModalItems;
