import styled from 'styled-components';
import MemoItem from './MemoItem';

const MemoItemsBlock = styled.div`
  margin: 15px 0 0 10px;
`;

const MemoItems = () => {
  return (
    <MemoItemsBlock>
      <MemoItem />
    </MemoItemsBlock>
  );
};

export default MemoItems;
