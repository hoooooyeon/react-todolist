import styled from 'styled-components';
import MemoItems from './MemoItems';
import MemoFunc from './MemoFunc';
import { useRef } from 'react';

const MemoListBlock = styled.div`
  border: 2px solid #a3c6c4;
  background-color: white;
  word-break: break-all;
  padding: 10px;
  border-radius: 10px;
  &:hover {
    box-shadow: 1px 1px 5px gray;
  }
`;

const ListHeader = styled.h3`
  text-align: center;
  color: #354649;
  margin: 10px 0 0px 0;
`;

const MemoList = () => {
  // MemoFunc를 마우스 올릴때만 보이게 하기.
  const func = useRef();
  const onMouseOver = (e) => {
    func.current.style.visibility = 'visible';
  };
  const onMouseOut = (e) => {
    func.current.style.visibility = 'hidden';
  };
  return (
    <MemoListBlock onMouseOut={onMouseOut} onMouseOver={onMouseOver}>
      <ListHeader>WEDNESDAY, July 5th</ListHeader>
      <MemoItems />
      <MemoFunc func={func} />
    </MemoListBlock>
  );
};

export default MemoList;
