import styled, { css } from 'styled-components';

const MemoListBlock = styled.div`
  margin: 15px 0 0 10px;
`;

const MemoItem = styled.div`
  width: 250px;
  height: 25px;
  padding: 5px;
`;
const MemoItemCheckBox = styled.input`
  display: none;
  &:checked + label::after {
    content: '✔';
    width: 20px;
    height: 20px;
    text-align: center;
    font-size: 20px;
    position: absolute;
    bottom: 3px;
    color: #a3c6c4;
  }
`;
const MemoItemCheckBoxLabel = styled.label`
  width: 20px;
  height: 20px;
  border: 2px solid #e0e7e9;
  border-radius: 100px;
  background-color: white;
  position: relative;
  display: inline-block;
`;
const MemoItemTextForm = styled.div`
  width: 210px;
  height: 30px;
  outline: none;
  display: inline-block;
  position: relative;
  left: 10px;
  top: -4px;
  ${(props) =>
    props &&
    css`
      color: ${(props) =>
        props.check.checked
          ? 'rgba(0, 0, 0, 0.3)'
          : props.point.pointed
          ? 'rgb(240, 12, 12)'
          : ''};
      text-decoration: ${(props) =>
        props.check.checked ? 'line-through' : 'null'};
    `}
`;

const MemoList = ({ toDoMemo }) => {
  const { memoArr } = toDoMemo;

  return (
    <MemoListBlock>
      {memoArr.map((modalMemo) => {
        const { text, check, point } = modalMemo;
        return (
          <MemoItem key={modalMemo.id}>
            <MemoItemCheckBox
              type="checkbox"
              checked={check.checked}
              readOnly
            />
            <MemoItemCheckBoxLabel htmlFor={check.id} />
            <MemoItemTextForm check={check} point={point}>
              {text}
            </MemoItemTextForm>
          </MemoItem>
        );
      })}
    </MemoListBlock>
  );
};

export default MemoList;
