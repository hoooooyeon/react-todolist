import styled from 'styled-components';

const MemoItemBlock = styled.div`
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
const CheckBoxLabel = styled.label`
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
`;

const MemoItem = () => {
  return (
    <MemoItemBlock>
      <MemoItemCheckBox />
      <CheckBoxLabel />
      <MemoItemTextForm>aaaaaaaaaaaaaa</MemoItemTextForm>
    </MemoItemBlock>
  );
};

export default MemoItem;
