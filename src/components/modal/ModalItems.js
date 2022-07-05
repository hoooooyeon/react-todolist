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

const ModalItems = ({ items, onPoint, onRemove }) => {
  return (
    <ItemItemsBlock>
      {items.map((item) => (
        <ModalItem
          item={item}
          key={item.id}
          onRemove={onRemove}
          onPoint={onPoint}
        />
      ))}
    </ItemItemsBlock>
  );
};

export default ModalItems;
