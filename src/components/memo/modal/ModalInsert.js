import styled from 'styled-components';
import { useState, useCallback } from 'react';
import Button from '../../common/Button';

const ModalInsertBlock = styled.form`
  position: relative;
  top: 30px;
  text-align: center;
`;

const TextInput = styled.input`
  width: 300px;
  height: 30px;
  border: none;
  border-bottom: 2px solid #a3c6c4;
  font-size: 20px;
  outline: none;
  margin-right: 10px;
  padding-left: 5px;
  &::placeholder {
    font-size: 20px;
    color: #e0e7e9;
  }
`;

const ModalInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue('');
      e.preventDefault();
    },
    [onInsert, value],
  );

  return (
    <ModalInsertBlock onSubmit={onSubmit}>
      <TextInput
        placeholder="Input here..."
        onChange={onChange}
        value={value}
      />
      <Button>INPUT</Button>
    </ModalInsertBlock>
  );
};

export default ModalInsert;
