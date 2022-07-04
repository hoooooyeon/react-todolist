import styled from 'styled-components';
import MemoListItem from './MemoListItem';

const ItemItemsBlock = styled.div`
  position: relative;
  top: 60px;
  left: 27px;
  height: 230px;
  overflow: auto;
  width: 450px;
`;

const ModalItems = ({ items, onPoint }) => {
  return (
    <ItemItemsBlock>
      {items.map((item) => (
        <MemoListItem item={item} key={item.id} onPoint={onPoint} />
      ))}
    </ItemItemsBlock>
  );
};

export default ModalItems;
