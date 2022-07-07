import styled from 'styled-components';
import ModalItem from './ModalItem';

const ItemItemsBlock = styled.div`
  position: relative;
  top: 60px;
  left: 27px;
  height: 230px;
  overflow: auto;
  width: 450px;
`;

const ModalItems = ({ mdItems, onPoint, onRemove, selectedId }) => {
  return (
    <ItemItemsBlock>
      {mdItems.map((mdItem) => (
        <ModalItem
          mdItem={mdItem}
          key={mdItem.id}
          onRemove={onRemove}
          onPoint={onPoint}
          selectedId={selectedId}
        />
      ))}
    </ItemItemsBlock>
  );
};
export default ModalItems;
