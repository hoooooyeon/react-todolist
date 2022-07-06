import styled from 'styled-components';
import MemoItem from './MemoItem';

const MemoItemsBlock = styled.div`
  margin: 15px 0 0 10px;
`;

const MemoItems = ({ mmItem }) => {
  const { mdItems } = mmItem;
  return (
    <MemoItemsBlock>
      {mdItems.map((mdItem) => (
        <MemoItem mdItem={mdItem} key={mdItem.id} />
      ))}
    </MemoItemsBlock>
  );
};

export default MemoItems;
